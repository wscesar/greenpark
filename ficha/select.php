<?php
	extract($_POST);

	require 'connect.php';

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
		
		echo '
			<tr>
				<td>'.$nome.'</td>
				<td>'.$nascimento.'</td>
				<td>'.$pai.'</td>
				<td>'.$mae.'</td>
				<td>'.$naturalidade.'</td>
				<td>'.$nacionalidade.'</td>
				<td>'.$uf.'</td>
				<td>'.$rg_rne_pass.'</td>
				<td>'.$cpf.'</td>
				<td>'.$profissao.'</td>
				<td>'.$renda.'</td>
				<td>'.$outras_rendas.'</td>
				<td>'.$empresa.'</td>
				<td>'.$tempo_de_servico.'</td>
				<td>'.$fgts.'</td>
				<td>'.$rua.'</td>
				<td>'.$cidade.'</td>
				<td>'.$bairro.'</td>
				<td>'.$uf.'</td>
				<td>'.$telefone.'</td>
				<td>'.$celular.'</td>
				<td>'.$email.'</td>
			</tr>
		';
	}


	mysqli_close($con);
?>