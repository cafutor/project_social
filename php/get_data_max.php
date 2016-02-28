<?php 
class Get_data_max{
	//取得post_num
	static function fetch_post_num(){
	     if(isset($_POST['request_data_num'])){
		  return $_POST['request_data_num'];
		 }else{
		 	return 0;
		 }
	}
    //取得conobj
    static function fetch_con_obj(){
    	 include("connect.php");
		 return $con;
    }
	//取得所有的表名
	public static function get_all_tables(){
	     $conobj=self::fetch_con_obj();
		mysqli_query($conobj,"SET NAMES 'UTF8'");
        mysqli_select_db($conobj, "htsocialjob");
		$sql="SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'htsocialjob'";
		$result=mysqli_query($conobj, $sql);
		$num=mysqli_num_rows($result);
		$array_table_names=array();
		$array_final=array();
		for($i=0;$i<$num;$i++){
			array_push($array_table_names,mysqli_fetch_row($result)[0]);
		}
		return $array_table_names;
	}
	//fetch username follow_name
	static function fetch_follow_name(){
		$conobj=self::fetch_con_obj();
		$all_tables_name=self::get_all_tables();
		$array_one=array();
		$array_final=array();
		//user name 点赞id
		for($i=0;$i<count($all_tables_name);$i++){
			$sql_2="SELECT time_when_send,follow_name FROM ".$all_tables_name[$i]." WHERE follow_num>0";
			$result=mysqli_query($conobj, $sql_2);
		    $num=mysqli_num_rows($result);
			$num_1=0;
			while($num_1<$num){
				$num_1++;
				array_push($array_one,mysqli_fetch_row($result));
				array_push($array_one,$all_tables_name[$i]);
			}
		}
	    $array_one_num=count($array_one);
          $num_l=-1;
          while($num_l<$array_one_num-1){
          	$num_l++;
			  if($num_l%2===0){
			  	array_push($array_one[$num_l],$array_one[$num_l+1]);
				 array_push($array_final,$array_one[$num_l]);
			  }
          }			
	 return $array_final;
	}
	//取得所有表中的，user_msg,time_when_send,follow_num,follow_name
   static function fetch_all_info(){
   	$array_tables_name=self::get_all_tables();
   	$conobj=self::fetch_con_obj();
	$array_follow_info=self::fetch_follow_name();
	$array_one=array();
	$array_all=array();
	for($i=0;$i<count($array_tables_name);$i++){
		$sql="SELECT user_msg,time_when_send,follow_num FROM ".$array_tables_name[$i]." WHERE user_active_status=0";
		//头像，经验
		$sql_1="SELECT user_head_photo,userexpirence FROM ".$array_tables_name[$i]." WHERE user_active_status=1";
		$result=mysqli_query($conobj,$sql);
		$result_1=mysqli_query($conobj,$sql_1);
		$result_row=mysqli_fetch_row($result_1);
		$info_num=mysqli_num_rows($result);
		$i_num=0;
		if($info_num>0){
			while($i_num<$info_num){
			$i_num++;
			$array_one_1=mysqli_fetch_row($result);
			array_push($array_one_1,$array_tables_name[$i],$result_row);
			array_push($array_one,$array_one_1);
		}
		array_push($array_all,$array_one);	
	}
		}
	return $array_one;
   }
   //格式化时间
   static function time_formate(){
   	date_default_timezone_set("Asia/Shanghai");
   	$all_info_time_formate=self::fetch_all_info();
	$time_now=time();
	$num=count($all_info_time_formate);
	$time_when_send_1=array(1=>"刚刚");
	$time_when_send_2=array(1=>"30分钟前");
	$time_when_send_3=array(1=>"一小时前");
	$time_when_send_4=array(1=>"今天");
	$time_when_send_5=array(1=>"昨天");
    for ($inum=0;$inum<$num;$inum++) {
		$time_day=date('Y-m-d H:i:s',$all_info_time_formate[$inum][1]);
		$int_time=intval($all_info_time_formate[$inum][1]);
		$lnum=$time_now-$int_time;
		$time_when_send_6=array(1=>"$time_day");
		if($lnum<=30){
			array_push($all_info_time_formate[$inum][4],"刚刚");
		} elseif($lnum>30&&$lnum<=60){
			array_push($all_info_time_formate[$inum][4],"一分钟前");
		}elseif($lnum>60&&$lnum<=180){
			array_push($all_info_time_formate[$inum][4],"三分钟前");
		}elseif($lnum>180&&$lnum<=900){
			array_push($all_info_time_formate[$inum][4],"15分钟前");
		}elseif($lnum>900&&$lnum<=1800){
			array_push($all_info_time_formate[$inum][4],"30分钟前");
		}elseif($lnum>1800&&$lnum<=3600){
			array_push($all_info_time_formate[$inum][4],"一小时前");
		}elseif($lnum>3600&&$lnum<=7200){
			array_push($all_info_time_formate[$inum][4],"二小时前");
		}elseif($lnum>7200&&$lnum<=10800){
			array_push($all_info_time_formate[$inum][4],"三小时前");
		}else{
			array_push($all_info_time_formate[$inum][4],"$time_day");
		}
	}
	return $all_info_time_formate;
   }
//数据处理
	function data_handing(){
		$postnum=self::fetch_post_num();
		$all_info=self::time_formate();
		$countnum=count($all_info);
		if($countnum<=20){
			echo json_encode($all_info);
		}elseif($countnum>20&&$postnum===0){
			echo json_encode(array_slice($all_info,$countnum-20,$countnum-1 ));
		}elseif($countnum>20&&$postnum>0){
			$start_index=$countnum-20*$postnum;
			$end_index=$start_index+20;
			if($start_index>=0){
				echo json_encode(array_slice($all_info, $start_index,$end_index));
			}elseif($start_index<0){
				echo json_encode(array_slice($all_info, 0,$end_index));
			}
			
		}
	}
}
$newObj=new Get_data_max();
//输出数据
$newObj->data_handing();
	?>