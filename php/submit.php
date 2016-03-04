<?php
$con=mysqli_connect("127.0.0.1","root","");
if(!$con){
	die("链接数据库失败".mysql_error());
} 
    $time_when_send=time();
    mysqli_query($con,"SET NAMES UTF8");
	mysqli_select_db($con,"htsocialjob");
	$userloadedname=$_POST['username'];
	$txt=$_POST['user_msg'];
	mysqli_query($con,"INSERT INTO ".$userloadedname."(user_msg,time_when_send)VALUES('$txt','$time_when_send')");
	mysqli_close($con);
	echo $time_when_send;
?>