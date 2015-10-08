<?php
	extract($_POST);

	require 'sql-connect.php';

	$sql = "insert into tbl_ficha_cadastral(nome, pai, mae, nascimento, naturalidade, nacionalidade, estado_civil, rg_rne_pass, cpf, profissao, renda, outras_rendas, empresa, tempo_de_servico, fgts, rua, cidade, bairro, uf, telefone, celular, email, numero, regime_casamento, sexo)
			values('$nome', '$pai', '$mae', '$nascimento', '$naturalidade', '$nacionalidade', '$estado_civil' , '$rg_rne_pass', '$cpf', '$profissao', '$renda', '$outras_rendas', '$empresa', '$tempo_de_servico', '$fgts', '$rua', '$cidade', '$bairro', '$uf', '$telefone', '$celular', '$email', '$numero', '$regime_casamento', '$sexo')";

	$sql = utf8_decode($sql);

	$query = mysqli_query($con, $sql)or die($sql);

	mysqli_close($con);

	echo '<script>alert("Cadastro realizado com sucesso. Obrigado.");history.go(-1)</script>';
	
?>