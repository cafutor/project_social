<?php 
//点赞提交
	session_start();
	$con=mysqli_connect("127.0.0.1", "root", "", "htsocialjob", 3306);
	if(!$con){
		die("failed to connect mysql".mysqli_error());
	}
	mysqli_query($con, "SET NAMES 'UTF8'");
    mysqli_select_db($con,"htsocialjob");
	$follownum=$_POST['follow_num_send'];
	$followusername=$_POST['follow_user_name'];
	$followusername_1=",".$followusername;
	$targetname=$_POST['target_name'];
	$time_when_send=intval($_POST['time_when_send']);
	$sql="SELECT follow_name FROM ".$targetname." WHERE time_when_send=".$time_when_send."";
	$sql_0="UPDATE ".$targetname." SET follow_name='$followusername_1' WHERE time_when_send=".$time_when_send."";
	$sql_2="UPDATE ".$targetname." SET follow_num=follow_num+1 WHERE time_when_send=".$time_when_send."";
	$sql_4="UPDATE ".$targetname." SET follow_num=follow_num-1 WHERE time_when_send=".$time_when_send."";
	$sql_1="UPDATE ".$targetname." SET follow_name=concat(follow_name,".$followusername_1.") WHERE time_when_send=".$time_when_send."";
	$sql_3="UPDATE ".$targetname." SET follow_name=SUBSTRING_INDEX(follow_name,'$followusername_1',1) WHERE time_when_send=".$time_when_send."";
	$sql_result=mysqli_query($con,$sql);
	$result_str=mysqli_fetch_row($sql_result)[0];
	if(empty($result_str)){
		mysqli_query($con, $sql_0);
		mysqli_query($con, $sql_2);
	}
			   $array_str=explode(",", $result_str);
			   $arraystr_num=count($array_str);
			   	for($i=0;$i<$arraystr_num;$i++){
			   		if($followusername===$array_str[$i]){
		                mysqli_query($con, $sql_3);
						mysqli_query($con,$sql_4);
			   		}elseif($followusername!==$array_str[$i]){
			   			mysqli_query($con, $sql_1);
						mysqli_query($con,$sql_2);
			   		}
			   		}  
	?>