<?php 
	extract($_POST);

	if(isset($submit)) {
		if($username == 'admin' && $password == '123'){
			echo "<script>sessionStorage.setItem('login', 'true')</script>";
			echo "<script>location='index.php'</script>";
		}else{
			echo "<script>alert('nome ou sneha invalidos')</script>";
		}
	}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
	*{
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
		body{
			background: #fbfbfb;
		}

		form{
			width: 300px;
			margin:10% auto 0;
			display: block;
		}

		input{
			height: 30px;
			width: 100%;
		}

		img{
			margin: 25px auto;
			display: block;
		}

	</style>
</head>
<body>
	<form action="" method="post">
		<img class="logo" src="img/logo-greenpark.png" >
		<input placeholder="Usuário" name="username" type="text">
		<input placeholder="Senha" name="password" type="password">
		<input name="submit" type="submit">
		<img class="logo" src="img/logo-teamprime.png">
	</form>	
</body>
</html>