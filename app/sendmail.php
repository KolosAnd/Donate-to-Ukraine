<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exceprion;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

$mail->setLanguage('ru','phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('hi@prstnst.agency','you.in.ua User');

$mail->addAddress('sashavladyka@gmail.com','hi@prstnst.agency');

$mail->Subject = "Form you.in.ua";

$body = '<h1>Form from user:</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
}

if(trim(!empty($_POST['description-help']))){
    $body.='<p><strong>Message:</strong> '.$_POST['description-help'].'</p>';
}

$mail->Body = $body;

if(!$mail->send()){
    $message = 'Error';
} else {
    $message = "Form was sent";
}

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);
?>
