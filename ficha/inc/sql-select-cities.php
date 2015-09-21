<?php 
	extract($_POST);

	require 'sql-connect.php';

	$sql = "select cidade from tbl_cidades where uf = '$uf'";

	$query = mysqli_query($con, $sql);

	while ($rs = mysqli_fetch_array($query)) {
		echo '<option>'. utf8_encode($rs['cidade']).'</option>';
	}
?>