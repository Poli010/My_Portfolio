<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if(isset($_POST["submit"])){
    $my_email = $_POST["my_email"];
    $your_email = $_POST["your_email"];
    $message = $_POST["message"];

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth=true;
    $mail ->Username = 'ivan.policutie01@gmail.com';
    $mail ->Password = 'rpym kvhd vtao zjhe';
    $mail ->SMTPSecure='ssl';
    $mail ->Port='465';

    $mail ->setFrom('ivan.policutie01@gmail.com',$your_email);

    $mail->addAddress($my_email);
    $mail->isHTML(true);
    $mail->Subject = "From Portfolio";
    $mail->Body = $message;

    $mail->send();

    echo "
        <script>
            alert('Your message sent successfully')
            document.location.href ='index.html'
        </script>
    ";
}
?>