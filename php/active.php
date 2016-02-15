<?php 
	$con=mysql_connect("127.0.0.1","root","");
	if(!$con){
		die("failed to connect database".mysql_error());
	}
//	$setnum=substr(date('YmdHi'),9,1);
//	$set_num=substr(date('YmdHi'),10,2);
//	$regtime=substr(substr($_GET['regtime'], 0,11),9,1)
    mysql_query("SET NAMES 'UTF8'");
	mysql_select_db("htsocialjob",$con);
	$username=$_GET['username'];
	$sql_token="SELECT  token FROM  ".$username." where user_active_status=0";
	$result=mysql_query($sql_token,$con);
	$get_result=$_GET['confirm'];
	if($get_result===mysql_fetch_row($result)[0]){
		mysql_query("UPDATE ".$username." SET user_active_status=1,token= null WHERE user_active_status=0",$con); 
		echo "<b>恭喜你注册成功</b>";
	}
	mysql_close($con);
		?>