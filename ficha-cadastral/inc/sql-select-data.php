<?php
	extract($_POST);

	require 'sql-connect.php';

	$where = '';

	foreach ($_POST as $field => $value) {
		
		if ( $value != '' ) {

			if ( $where == '' ) {
				$where = $where . " where $field like '$value%' ";
			} else {
				$where = $where . " and $field like '$value%'";
			}

		} 

	}

	$sql = 'select * from tbl_ficha_cadastral'.$where;
	$query = mysqli_query($con, $sql)or die($sql);

	while ( $rs = mysqli_fetch_array($query) ) {
		extract($rs);
		
		$nascimento = explode('-',$nascimento);

		$nascimento = $nascimento[2] .' / '. $nascimento[1] .' / '. $nascimento[0];

		$endereco = "$rua, nº $numero, $bairro, $cidade/$uf";

		$result = "
			<div class='row'>
				<div class='result'>
					<div class='inner-row'>
						<div class='w1'> <b>Nome:</b> $nome</div>
					</div>

					<div class='inner-row'>
						<div class='w1'> <b>Endereço:</b> $endereco</div>
					</div>

					<div class='inner-row'>
						<div class='w2'> <b>Nome do Pai:</b> $pai</div>
						<div class='w2'> <b>Nome da Mae:</b> $mae</div>
					</div>

					<div class='inner-row'>
						<div class='w6'> <b>Nascimento:</b> $nascimento</div>
						<div class='w6'> <b>Naturalidade:</b> $naturalidade</div>
						<div class='w6'> <b>Nacionalidade:</b> $nacionalidade</div>
						<div class='w6'> <b>Sexo:</b> $sexo</div>
						<div class='w6'> <b>Estado Civil:</b> $estado_civil</div>
						<div class='w6'> <b>Regime_casamento:</b> $regime_casamento</div>
					</div>
					
					<div class='inner-row'>
						<div class='w4'> <b>RG / RNE / PASS:</b> $rg_rne_pass</div>
						<div class='w4'> <b>CPF:</b> $cpf</div>
						<div class='w4'> <b>Empresa:</b> $empresa</div>
						<div class='w4'> <b>Profissão:</b> $profissao</div>
					</div>

					<div class='inner-row'>
						<div class='w4'> <b>Tempo de servico:</b> $tempo_de_servico</div>
						<div class='w4'> <b>Renda:</b> $renda</div>
						<div class='w4'> <b>FGTS:</b> $fgts</div>
						<div class='w4'> <b>Outras Rendas:</b> $renda</div>
					</div>

					<div class='inner-row'>
						<div class='w4'> <b>Telefone:</b> $telefone</div>
						<div class='w4'> <b>Celular:</b> $celular</div>
						<div class='w4'> <b>Email:</b> $email</div>
						<div class='w4'> <b>Cartorio:</b> $cartorio</div>
					</div>
				</div>
			</div>
		";
		
		echo $result;
	}

	mysqli_close($con);
?>