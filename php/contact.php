<?php
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