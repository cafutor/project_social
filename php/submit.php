﻿<?php
$con=mysql_connect("127.0.0.1","root","");
if(!$con){
	die("链接数据库失败".mysql_error());
}
    mysql_query("SET NAMES UTF8");
	mysql_select_db("htsocialjob",$con);
	$txt=$_POST['saytxt'];
	mysql_query("INSERT INTO usermsg(content)VALUES('$txt')");
	mysql_close($con);
?>

