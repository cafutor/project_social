<?php 
	$con=mysql_connect("127.0.0.1","root","");
	if(!$con){
		die("failed to connect database".mysql_error());
	}
   $time_now=time();
   $timestamp_active=$_GET['regtime'];
   $time_num=$time_now-$timestamp_active;
   if($time_num<=900){
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
   }else{
   	echo "链接失效了，亲请重新注册";
   }
	mysql_close($con);
		?>