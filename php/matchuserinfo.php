<?php 
	session_start();
	$con=mysql_connect("127.0.0.1", "root", "");
	if(!$con){
		echo "connect mysql failed".mysql_error();
	}
	mysql_query("SET NAMES UTF8");
	mysql_select_db("htsocialjob",$con);
	$user_submit_email=$_POST['user_submit_email'];
	$user_submi_password=md5(trim($_POST['user_submit_password']));
	//fetch all table_names from database
$sql="SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'htsocialjob'";
$result=mysql_query($sql,$con);
$result_num=mysql_num_rows($result);
$num=0;
$num_email=0;
$num_password=0;
$array_result=array();
$array_email=array();
$array_password=array();
$match_num=0;
while ($num<$result_num) {
	$num++;
	array_push($array_result,mysql_fetch_row($result)[0]);
	//fetch all useremail
};
while ($num_email<$result_num) {
	$num_email++;
	$sql_email="SELECT usermail From ".$array_result[$num_email-1]." WHERE user_active_status=1";
     $result_email=mysql_query($sql_email,$con);
	array_push($array_email,mysql_fetch_row($result_email)[0]);
}
while ($num_password<$result_num) {
	$num_password++;
	$sql_password="SELECT userpassword From ".$array_result[$num_password-1]." WHERE user_active_status=1";
     $result_password=mysql_query($sql_password,$con);
	array_push($array_password,mysql_fetch_row($result_password)[0]);
}
$num=sizeof($array_email);
$userinfo=array();
for($i=0;$i<$num;$i++){
	if($user_submit_email===$array_email[$i]&&$user_submi_password===$array_password[$i]){
		$match_num=1;
		$_SESSION['useremail']=$array_email[$i];
		$_SESSION['userpassword']=$array_password[$i];
		$sql_select_user_head_photo="SELECT user_head_photo,userexpirence,username FROM  ".$array_result[$i]." WHERE user_active_status=1";
		for($l=0;$l<mysql_num_fields(mysql_query($sql_select_user_head_photo,$con));$l++){
			 array_push($userinfo,mysql_fetch_row(mysql_query($sql_select_user_head_photo,$con))[$l]);
		}
	}
}
array_push($userinfo,$match_num);
if(sizeof($userinfo)>1){
$_SESSION['usernameload']=$userinfo[2];
}

echo json_encode($userinfo);
	?>