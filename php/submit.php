<?php
$con=mysql_connect("127.0.0.1","root","");
if(!$con){
	die("链接数据库失败".mysql_error());
} 
   $time_when_send=time();
    mysql_query("SET NAMES UTF8");
	mysql_select_db("htsocialjob",$con);
	$userloadedname=$_POST['username'];
	$txt=$_POST['user_msg'];
	mysql_query("INSERT INTO ".$userloadedname."(user_msg,time_when_send)VALUES('$txt','$time_when_send')");
	mysql_close($con);
?>