﻿<?php
	$con=mysqli_connect("127.0.0.1","root","");
	if(!$con){
		die("failed to connect database".mysqli_error());
	}
    mysqli_select_db($con, "htsocialjob");
	mysqli_query($con,"SET NAMES 'UTF8'");
	date_default_timezone_set("Asia/Shanghai");
	$time=date("YmdHis");
	$timestamp=time();
	$password=md5(trim($_POST['userpassword']));
	$email=$_POST['useremail'];
	$name=$_POST['username'];
	$token=md5(trim($password.$email.$time));
	$sql_user_info="CREATE TABLE htsocialjob.".$name." ( usermail TINYTEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,username TINYTEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL, userpassword TINYTEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , user_active_status  TINYINT(3) NOT NULL , user_head_photo TINYTEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , user_msg TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , follow_num INT(50) NOT NULL , time_when_send INT(50) NOT NULL,time_when_reg TINYTEXT NOT NULL,token TINYTEXT NOT NULL,userexpirence TINYTEXT NOT NULL ,follow_name TINYTEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL) ENGINE = InnoDB;";
	$sql_result=mysqli_query($con, $sql_user_info);
	$sqlquery="INSERT INTO ".$name." (usermail,username,userpassword,time_when_reg,token,user_head_photo,userexpirence)VALUES('$email','$name','$password','$time','$token','http://localhost:8081/social_job/img/dafaultphoto.png','新来乍到，多多关照')";
	if($sql_result){
		mysqli_query($con,$sqlquery);
	}
	
	mysqli_close($con);
//发送激活邮箱
require 'phpmail/PHPMailerAutoload.php';
$mail = new PHPMailer;
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.qq.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '2362076469@qq.com';                 // SMTP username
$mail->Password = 'ggsvmrtwpyqceaaf';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25;                                    // TCP port to connect to
$mail->setFrom('2362076469@qq.com', 'social_job');
//$mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
$mail->addAddress($email);               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = '注册激活';
$mail->Body    = '<b>离激活还差一步</b><a href="http://127.0.0.1:443/social_job/php/active.php?confirm='.$token.'&username='.$name.'&regtime='.$timestamp.'">http://127.0.0.1:443/social_job/php/active.php?confirm='.$token.'&username='.$name.'&regtime='.$time.'</a>';
$mail->AltBody = 'haha';
$mail->send();
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
	?>