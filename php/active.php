<?php 
	$con=mysql_connect("127.0.0.1","****","****");
	if(!$con){
		die("failed to connect database".mysql_error());
	}
    mysql_query("SET NAMES 'UTF8'");
	mysql_select_db("htsocialjob",$con);
	$sql_token="SELECT  usertoken FROM user_info where status=0";
	$result=mysql_query($sql_token,$con);
	$get_result=$_GET['confirm'];
	if($get_result===mysql_fetch_row($result)[0]){
		mysql_query("UPDATE user_info SET status=1,usertoken= null WHERE status=0",$con); 
		echo "<b>恭喜你注册成功</b>";
	}
	mysql_close($con);
		?>
