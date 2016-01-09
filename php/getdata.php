<?php 
	$con=mysql_connect("127.0.0.1","root","");
	if(!$con){
		die("链接数据库失败".mysql_error());
	}
	mysql_query("SET NAMES UTF8");
	mysql_select_db("htsocialjob",$con);
	$sql="SELECT content FROM usermsg";
	$data=mysql_query($sql,$con);
	$columnlen=mysql_num_rows($data);
	$num=0;
	$dataarray=array();
	while ($num <= $columnlen) {
		$num++;
		array_push($dataarray,mysql_fetch_row($data)[0]);
	}
	$jsondata=json_encode($dataarray);
	echo $jsondata;
	
	mysql_close($con);
	?>