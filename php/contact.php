<?php

if ( $_SERVER['REQUEST_METHOD']=='GET' && realpath(__FILE__) == realpath( $_SERVER['SCRIPT_FILENAME'] ) ) {
    /*
       Up to you which header to send, some prefer 404 even if
       the files does exist for security
    */
    header( 'HTTP/1.0 403 Forbidden', TRUE, 403 );

    /* choose the appropriate page to redirect users */
    die( header( 'location: /' ) );
}
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$EmailTo = "anilkreddy.a@gmail.com";
$EmailFrom = "hello@anil.red";
$Subject = "Contact form enquiry from: ".$name;

// prepare email body text
$messageBody = "A new enquiry form is submitted in website"."\n\n";
$messageBody .= "Name: ";
$messageBody .= $name;
$messageBody .= "\n";

$messageBody .= "Email: ";
$messageBody .= $email;
$messageBody .= "\n";

$messageBody .= "Message: ";
$messageBody .= $message;
$messageBody .= "\n";

// send email
$success = mail($EmailTo, $Subject, $messageBody, "From:".$EmailFrom);

// redirect to success page
if ($success){
    echo "success";
}else{
    echo "error";
}

?>