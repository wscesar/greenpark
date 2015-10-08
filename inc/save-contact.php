<?php 
	require 'connect.php';

	$sql = "insert into tbl_contatos(name, email, phone, message, form) values('$name', '$email', '$phone', '$msg', '$form')";
	
	$query = mysqli_query($con,$sql)or die($sql);

	mysqli_close($con);
 ?>