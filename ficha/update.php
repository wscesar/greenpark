<?php 
	extract($_POST);

	$tmp_file = $_FILES['foto']['tmp_name'];
	$extension = explode( '.', $_FILES['foto']['name'] );
	$extension = array_reverse($extension);
	$extension = strtolower($extension[0]);


	require_once("../vendor/autoload.php");
	\Tinify\setKey("r5qVHDrXzRNCi0abuMSHKNw4CJHXOLLi");

	list($tmp_width, $tmp_height) = getimagesize($tmp_file);

	$source = \Tinify\fromFile($tmp_file);
	$resized = $source->resize(array(
	    "method" => "cover",
	    "width" => 487,
	    "height" => 366
	));
	$resized->tofile("../assets/img/work-progress.png");

	$myfile = fopen('update.txt', 'w');
	fwrite($myfile, date('d.m.Y'))or die('Erro ao atualizar data');
	fclose($myfile);

	try {
	    // Use the Tinify API client.
	} catch(\Tinify\AccountException $e) {
	    print("The error message is: " + $e.getMessage());
	    // Verify your API key and account limit.
	} catch(\Tinify\ClientException $e) {
	    // Check your source image and request options.
	} catch(\Tinify\ServerException $e) {
	    // Temporary issue with the Tinify API.
	} catch(\Tinify\ConnectionException $e) {
	    // A network connection error occurred.
	} catch(Exception $e) {
	    // Something else went wrong, unrelated to the Tinify API.
	}

	echo '<script>window.location = "index.php"</script>';
?>

