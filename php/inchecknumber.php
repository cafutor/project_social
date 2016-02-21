<?php 
//check name,email ,checknumber
    session_start();
	$con=mysql_connect("127.0.0.1","root","");
if(!$con){
	die("链接数据库失败".mysql_error());
}
mysql_select_db("htsocialjob",$con);
$sql="SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'htsocialjob'";
$sql_email="SELECT username From";
$result=mysql_query($sql,$con);
$result_num=mysql_num_rows($result);
$num=0;
$num_email=0;
$array_result=array();
$array_email=array();
while ($num<$result_num) {
	$num++;
	array_push($array_result,mysql_fetch_row($result)[0]);
	//fetch all useremail
};
while ($num_email<$result_num) {
	$num_email++;
	$sql_email="SELECT usermail From ".$array_result[$num_email-1]."";
     $result_email=mysql_query($sql_email,$con);
	array_push($array_email,mysql_fetch_row($result_email)[0]);
}
//fetch all username and useremail
$json_check=array();
mysql_close($con);
	$inchecknumber=$_POST['check_num'];
	$lower_checknum=strtolower($_SESSION['checkCode']);
	if($inchecknumber===$lower_checknum){
		$status_num=1;
	}else{
		$status_num=0;
	}
	array_push($json_check,$array_result, $array_email,$status_num);
     echo  json_encode($json_check);
	
	?>