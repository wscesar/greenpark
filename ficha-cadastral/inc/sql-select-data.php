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
		
		echo '
			<table border="1" cellpadding="10" cellspacing="0" width="80%" align="center" style="border-collapse: collapse;">
				<thead>
					<tr>
						<td colspan="4"><b>Nome: </b>'.$nome.'</td>
					</tr>
				</thead>
				
				<tbody style="">
					<tr>
						<td colspan="4"><b>Endereco: </b>'.$endereco.'</td>
					</tr>

					<tr>
						<td colspan="2"><b>Pai: </b>'.$pai.'</td>
						<td colspan="2"><b>Mae: </b>'.$mae.'</td>
					</tr>
					
					<tr>
						<td><b>Sexo: </b>'.$sexo.'</td>
						<td><b>Nascimento: </b>'.$nascimento.'</td>
						<td><b>Naturalidade: </b>'.$naturalidade.'</td>
						<td><b>Nacionalidade: </b>'.$nacionalidade.'</td>
					</tr>

					<tr>
						<td><b>Rg_rne_pass: </b>'.$rg_rne_pass.'</td>
						<td><b>Cpf: </b>'.$cpf.'</td>
						<td><b>Empresa: </b>'.$empresa.'</td>
						<td><b>Profissao: </b>'.$profissao.'</td>
					</tr>

					<tr>
						<td><b>Renda: </b>'.$renda.'</td>
						<td><b>Outras_rendas: </b>'.$outras_rendas.'</td>
						<td><b>Tempo_de_servico: </b>'.$tempo_de_servico.'</td>
						<td><b>Fgts: </b>'.$fgts.'</td>
					</tr>

					</tr>
						<td><b>Telefone: </b>'.$telefone.'</td>
						<td><b>Celular: </b>'.$celular.'</td>
						<td><b>Email: </b>'.$email.'</td>
						<td><b>Cartorio: </b>'.$cartorio.'</td>
					</tr>
				</tbody>
			</table>
		';
	}


	mysqli_close($con);
?>