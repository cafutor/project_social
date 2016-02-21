<?php 
session_start();
    $num = 5;
    $size = 30;
    $str = "23456789abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVW";
    $array_num=array();
    for ($i = 0; $i < $num; $i++) {
        array_push($array_num,$str[mt_rand(0, strlen($str)-1)]);
    }
    $code =implode("",$array_num);
    // draw image
    $width=120;
    $height=40;
    $im = imagecreatetruecolor($width, $height);
    // define color
    $back_color = imagecolorallocate($im, 230, 206, 230);
    $boer_color = imagecolorallocate($im, 118, 151, 109);
    $text_color = imagecolorallocate($im, mt_rand(0, 200), mt_rand(0, 120), mt_rand(0, 120));
    // draw background
    imagefilledrectangle($im, 0, 0, 150, 80, $back_color);

    for($i = 0;$i < 5;$i++) {
        $font_color = imagecolorallocate($im, mt_rand(0, 255), mt_rand(0, 255), mt_rand(0, 255));
        //draw arc line
        imagearc($im, mt_rand(- $width, $height), mt_rand(- $height,$height), mt_rand(30, $width * 2), mt_rand(20, $height * 2), mt_rand(0, 360), mt_rand(0, 360), $font_color);
    }
    // draw dirty
    for($i = 0;$i < 50;$i++) {
        $font_color = imagecolorallocate($im, mt_rand(0, 255), mt_rand(0, 255), mt_rand(0, 255));
        imagesetpixel($im, mt_rand(0, $width), mt_rand(0, $height), $font_color);
    }
    // draw check number
    ob_clean();
    @imagefttext($im, $size , 0, 9, $size + 3, $text_color, 'c:\\WINDOWS\\Fonts\\simsun.ttc', $code);
    //conserve checknumber
    $_SESSION['checkCode']=$code;
    header("Cache-Control: max-age=1, s-maxage=1, no-cache, must-revalidate");
    header("Content-type: image/png;charset=gb2312");
    //output image
    imagepng($im);
    //destory image
    imagedestroy($im);
?>