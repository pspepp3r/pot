<?php

$to = "prosperpepple12@gmail.com";

$subject = $_POST['subject'];
$message = $_POST['message'];
$headers = "From: " . $_POST['name'] . "<" . $_POST['email'] . ">";

mail($to, $subject, $message, $headers);
