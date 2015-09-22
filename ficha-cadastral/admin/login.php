<?php 
	extract($_POST);

	if(isset($submit)) {
		
		if($username == 'admin' && $password == '123') {

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
	<link rel="stylesheet" href="../css/login.css">
</head>
<body>
	<form action="" method="post">
		
		<img src="../img/logo-greenpark.png" style="margin: 0 10px ; float:left"alt="" height="66">
		<img src="../img/logo-teamprime.png" style="margin: 0 10px ; float:right"alt="">

		<input name="username" placeholder="Usuário" type="text">
		<input name="password" placeholder="Senha" type="password">

		<input name="submit" type="submit" value="Entrar">
	</form>
</body>
</html>