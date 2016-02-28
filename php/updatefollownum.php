<?php 
//点赞
class Follownum{
	static function connect_da(){
		include("connect.php");
		return $con;
	}
	//获取用户表中每条信息的点赞id
	static function fetch_follow_id(){
	$targetname=$_POST['target_name'];
	$time_send=intval($_POST['time_when_send']);
	$conobj=self::connect_da();
	 $sql="SELECT follow_name FROM ".$targetname." WHERE time_when_send=".$time_send."";
	$result=mysqli_query($conobj, $sql);
	$result_value=mysqli_fetch_row($result)[0];
	if($result_value===""){
		return $result_value;
	}
	if($result_value!==""){
		$len_id=strlen($result_value);
		$sub_id=substr($result_value, 0,$len_id-1);
		$array_id=explode(",", $sub_id);
		return $array_id;
	}
	}

	//更新点赞数
	function update_follow_num(){
		$conobj=self::connect_da();
		$fetch_num=self::fetch_follow_id();
		//前端post来的点赞id,点赞目标id
		$follow_id=$_POST['follow_user_name'];
		$follow_id_index=$follow_id.",";
		$targetname=$_POST['target_name'];
		$time_send=intval($_POST['time_when_send']);
	   //点赞数自加一
	   $sql_2="UPDATE ".$targetname." SET follow_num=follow_num+1 WHERE time_when_send=".$time_send."";
	   //添加点赞用户id
	   $sql_id="UPDATE ".$targetname." SET follow_name='$follow_id_index' WHERE time_when_send=".$time_send."";
	    if($fetch_num===""){
		//点赞数自加一
		mysqli_query($conobj, $sql_2);
		//添加点赞id
		mysqli_query($conobj, $sql_id);
		echo 0;
	}
	if($fetch_num!==""){
		array_push($fetch_num,$follow_id);
			//如果点赞id用户已经存在则取消点赞
			if(array_count_values($fetch_num)[$follow_id]===2){
				mysqli_query($conobj, "UPDATE ".$targetname." SET follow_name=SUBSTRING_INDEX(follow_name,'$follow_id_index',1) WHERE time_when_send=".$time_send."");
				mysqli_query($conobj, "UPDATE ".$targetname." SET follow_num=follow_num-1 WHERE time_when_send=".$time_send."");
				echo 1;
			}else{
				mysqli_query($conobj, "UPDATE ".$targetname." SET follow_name=CONCAT(follow_name,'$follow_id_index') WHERE time_when_send=".$time_send."");
				mysqli_query($conobj, "UPDATE ".$targetname." SET follow_num=follow_num+1 WHERE time_when_send=".$time_send."");
				echo 2;
			}
	}
	}
}
$newfollownum=new Follownum();
$newfollownum->update_follow_num();
	?>