<?php 
$con= mysqli_connect("127.0.0.1", "root", "");
 if($con->connect_errno){
 	die('Connect Error: ' . $con->connect_errno);
 }
 mysqli_select_db($con, "htsocialjob");
 mysqli_query($con, "SET NAMES'UTF8'");
	?>