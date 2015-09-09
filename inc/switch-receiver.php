<?php 
	require 'connect.php';
	
	$sql = "select email from tbl_switch_contact limit 1";
	$query = mysqli_query($con,$sql);

	$rs = mysqli_fetch_array($query);

	$to = $rs['email'];

	switch($to){
		case 'wscesar@gmail.com' : $to = 'wsc1985@gmail.com'; break;
		case 'wsc1985@gmail.com' : $to = 'wscesar@gmail.com'; break;
	}

	$sql = "update tbl_switch_contact set email = '$to'";
	$query = mysqli_query($con,$sql);

	mysqli_close($con);

	echo $to;
 ?>