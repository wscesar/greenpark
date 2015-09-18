<?php
	extract($_POST);

	if(isset($submit)){

		require 'connect.php';

		$nascimento = $ano.'-'.$mes.'-'.$dia;

		$sql = "insert into tbl_ficha_cadastral(nome, pai, mae, nascimento, naturalidade, nacionalidade, estado_civil, rg_rne_pass, cpf, profissao, renda, outras_rendas, empresa, tempo_de_servico, fgts, rua, municipio, bairro, uf, telefone, celular, email)
				values('$nome', '$pai', '$mae', '$nascimento', '$naturalidade', '$nacionalidade', '$estado_civil' , '$rg_rne_pass', '$cpf', '$profissao', '$renda', '$outras_rendas', '$empresa', '$tempo_de_servico', '$fgts', '$rua', '$municipio', '$bairro', '$uf', '$telefone', '$celular', '$email')";

		$query = mysqli_query($con, $sql)or die($sql);

		mysqli_close($con);

	}

?>

<script>
	login = sessionStorage.getItem('login');

	if( login != 'true' ) {
		window.location = 'login.php';
	}
</script>


<!DOCTYPE html>
<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<title>Document</title>

	<style>
		body{
			background: #03582d;
		}
		form{
			background: #fbfbfb;
			border-radius: 5px;
			display: block;
			margin: auto;
			width: 300px;
			padding: 20px 40px;
		}
		div{
			margin: 0 0 20px;

		}
		label{
			display: block;
		}
		input{
			width: 100%;
		}
	</style>
</head>
<body>
	<form action='' method='post'>
		<div>
			<label for="nome">Nome</label>
			<input type="text" id="nome" name="nome">
		</div>

		<div>
			<label for="dia"></label>
			<input type="number" name="dia" id="dia">
			<input type="number" name="mes">
			<input type="number" name="ano">
		</div>

		<div>
			<label for="pai">Pai</label>
			<input type="text" id="pai" name="pai">
		</div>

		<div>
			<label for="mae">Mãe</label>
			<input type="text" id="mae" name="mae">
		</div>

		<div>
			<label for="naturalidade">Naturalidade</label>
			<input type="text" id="naturalidade" name="naturalidade">
		</div>

		<div>
			<label for="nacionalidade">Nacionalidade</label>
			<input type="text" id="nacionalidade" name="nacionalidade">
		</div>

		<div>
			<label for="estado Civil">Estado Civil</label>
			<input type="text" id="estado civil" name="estado civil">
		</div>

		<div>
			<label for="rg_RNE_PASS">RG_RNE_PASS</label>
			<input type="text" id="rg_rne_pass" name="rg_rne_pass">
		</div>

		<div>
			<label for="cpf">CPF</label>
			<input type="text" id="cpf" name="cpf">
		</div>

		<div>
			<label for="profissao">Profissão</label>
			<input type="text" id="profissao" name="profissao">
		</div>

		<div>
			<label for="renda">Renda</label>
			<input type="number" id="renda" value="0" name="renda" value="0">
		</div>

		<div>
			<label for="outras Rendas">Outras Rendas</label>
			<input type="number" id="outras_rendas" value="0" name="outras_rendas" value="0">
		</div>

		<div>
			<label for="empresa">Empresa em que trabalha</label>
			<input type="text" id="empresa" name="empresa">
		</div>

		<div>
			<label for="tempo_de_servico">Tempo de Serviço</label>
			<input type="text" id="tempo_de_servico" name="tempo_de_servico">
		</div>

		<div>
			<label for="fgts">Valor do FGTS</label>
			<input type="text" id="fgts" name="fgts">
		</div>

		<div>
			<label for="rua">rua</label>
			<input type="text" id="rua" name="rua">
		</div>

		<div>
			<label for="municipio">Município</label>
			<input type="text" id="municipio" name="municipio">
		</div>

		<div>
			<label for="bairro">Bairro</label>
			<input type="text" id="bairro" name="bairro">
		</div>

		<div>
			<label for="uf">UF</label>
			<input type="text" id="uf" name="uf">
		</div>

		<div>
			<label for="telefone">Telefone</label>
			<input type="text" id="telefone" name="telefone">
		</div>

		<div>
			<label for="celular">Celular</label>
			<input type="text" id="celular" name="celular">
		</div>

		<div>
			<label for="email">Email</label>
			<input type="email" id="email" name="email">
		</div>

		<input type="submit" name="submit">
	</form>

</body>
</html>


