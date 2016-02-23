<?php 
    session_start();
	$con=mysql_connect("127.0.0.1","root","");
	if(!$con){
		die(" failed to connect mysql".mysql_error());
	}
	mysql_query("SET NAMES UTF8");
	mysql_select_db("htsocialjob",$con);
	$sql="SELECT user_msg FROM angelSweety";
	$data=mysql_query($sql,$con);
	$columnlen=mysql_num_rows($data);
	$num=0;
	$usernameload=$_SESSION['usernameload'];
	$dataarray=array();
	while ($num <= $columnlen) {
		$num++;
		array_push($dataarray,mysql_fetch_row($data)[0]);
	}
	array_push($dataarray,$usernameload);
	$jsondata=json_encode($dataarray);
	echo $jsondata;
	mysql_close($con);
	?>