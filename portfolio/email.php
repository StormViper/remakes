<?php
  function email($first_name, $last_name, $email, $phone, $message){
    $to = "adam3692@hotmail.co.uk";
    $subject = "Website enquirey";
    $message = $message;
    $headers = 'From: webmaster@example.com' . "\r\n" .
      'Reply-To: webmaster@example.com' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

      mail($to, $subject, $message, $headers);
  }
?>
