<!DOCTYPE html>
<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<title>Document</title>
	<style>
		*{
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}
		
		body{
			background: #fbfbfb;
			/*color: #fff;*/
		}

		form{
			width: 300px;
			margin: 5% auto 0;
			display: block;
		}

		img{
			margin:25px auto 0;
			display: block;
		}
	</style>

</head>
<body style="display:none">
	
	<form action='update.php' method='post' enctype='multipart/form-data'>
		
		<img class="logo" src="img/logo-greenpark.png" >
		<br clear="all">
		<br clear="all">
		
		<input type='file' name='foto'>
		<input type='submit'>
	</form>

	<img src="../assets/img/work-progress.png" alt="" style="border: solid 3px #03582d; border-radius: 3px;">
	<br clear="all">
	<br clear="all">
    <img class="logo" src="img/logo-teamprime.png">


	<script>
		login = sessionStorage.getItem('login');

		if( login != 'true' ) {
			window.location = 'login.php';
		}else{
			document.querySelector('body').removeAttribute('style');
		}
	</script>
</body>
</html>