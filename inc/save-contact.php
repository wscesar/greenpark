<?php 
	require 'connect.php';

	$sql = "insert into tbl_contacts(name, email, phone, message, sent_to, form) values('$name', '$email', '$phone', '$msg', '$to', '$form')";
	
	$query = mysqli_query($con,$sql);

	mysqli_close($con);
 ?>