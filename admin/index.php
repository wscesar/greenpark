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
</head>
<body>
	<form action='update.php' method='post' enctype='multipart/form-data'>
		<input type='file' name='foto'>
		<input type='submit'>
	</form>
	<img src="../assets/img/work-progress.png" alt="">
</body>
</html>