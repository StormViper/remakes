<?php
  if(count($_POST) > 0) {
    $first_name = $_POST['first_name'];
    $last_name  = $_POST['last_name'];
    $email      = $_POST['email'];
    $phone      = $_POST['phone'];
    $message    = $_POST['message'];
    $header     = "Content-type: text/html\r\nReply-To: $email\r\nFrom: $first_name <$email>";

    $body ="Email recieved from ".$first_name." ".$last_name."<br /><hr />containing the following message: <br /> <div align='center'>".$message."</div><br /><hr />The following details were attached<br /><b>Email</b>: ".$email."<br /><b>Phone</b>: ".$phone;

    if(mail("adam3692@hotmail.co.uk", "Website enquiry", $body, $header)) {
      die("true");
    } else {
      die("There was an error sending the email!");
    }
  }
?>
