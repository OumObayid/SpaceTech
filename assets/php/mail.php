<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$choice = $_POST['choice'];
$namesociety = $_POST['namesociety'];
$message = $_POST['message'];

    $subject=$choice;
    //  $subject="test";
    
    
    
    
    
    
    $from = "From: Mail Contact Form <" . $email . ">";
    // $from = "venirdeloin@hotmail.fr";
    $to = "support@spacetech.tk";
    
    $body ="name: " . $firstname . "\nemail:" . $email . "\n" . $message;
    // $body = "ceci est un msg";
    
    if(mail($to,$subject,$body,$from)){
        echo 'E-mail message sent!';
    } else {
        echo 'E-mail delivery failure!';
    }



?>