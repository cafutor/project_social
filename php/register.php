<?php
	$con=mysql_connect("127.0.0.1","****","*****");
	if(!$con){
		die("failed to connect database".mysql_error());
	}
    mysql_query("SET NAMES 'UTF8'");
	mysql_select_db("htsocialjob",$con);
	$password=$_POST['userpassword'];
	$email=$_POST['useremail'];
	$exptime=time();
	$token=md5(trim($password.$email.$exptime));
	$sqlquery="INSERT INTO user_info(userpassword, useremail, exptime, usertoken)VALUES('$password','$email','$exptime','$token')";
	mysql_query($sqlquery,$con);
	mysql_close($con);
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
$mail->Body    = '<b>离激活还差一步</b><a href="http://127.0.0.1:8081/social_job/php/active.php?confirm='.$token.'">http://127.0.0.1:8081/social_job/php/active.php?confirm='.$token.'</a>';
$mail->AltBody = 'haha';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
	
	?>
