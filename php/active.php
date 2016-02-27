<?php 
	$con=mysqli_connect("127.0.0.1","root","");
	if(!$con){
		die("failed to connect database".mysql_error());
	}
   $time_now=time();
   $timestamp_active=$_GET['regtime'];
   $time_num=$time_now-$timestamp_active;
   if($time_num<=900){
    mysqli_query($con,"SET NAMES 'UTF8'");
	mysqli_select_db($con,"htsocialjob");
	$username=$_GET['username'];
	$sql_token="SELECT  token FROM  ".$username." where user_active_status=0";
	$result=mysqli_query($con,$sql_token);
	$get_result=$_GET['confirm'];
	if($get_result===mysqli_fetch_row($result)[0]){
		mysqli_query($con,"UPDATE ".$username." SET user_active_status=1,token= null WHERE user_active_status=0"); 
		echo "<b>恭喜你注册成功</b>";
	}
   }else{
   	echo "链接失效了，亲请重新注册";
   }
	mysqli_close($con);
		?>