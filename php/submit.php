<?php
$con=mysql_connect("127.0.0.1","****","****");
if(!$con){
	die("链接数据库失败".mysql_error());
}
    mysql_query("SET NAMES UTF8");
	mysql_select_db("htsocialjob",$con);
	$txt=$_POST['saytxt'];
	mysql_query("INSERT INTO user_info(usermsg)VALUES('$txt')");
	mysql_close($con);
?>

