<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include the PHPMailer autoloader
require 'PHPMailer/PHPMailer/src/Exception.php';
require 'PHPMailer/PHPMailer/src/PHPMailer.php';
require 'PHPMailer/PHPMailer/src/SMTP.php';

// Set your email and SMTP server details
$sender_email = "pmohit645@gmail.com";
$smtp_server = "smtp.gmail.com";
$smtp_port = 587;
$smtp_username = "ramangoyal87021@gmail.com";
$smtp_password = "lwscczvcprtjdaqe";

// List of recipients
$receiver_emails = array(
  "pmohit645@gmail.com",
  "ramangoyal87021@gmail.com",
  "ramangoyal870@gmail.com",
  // Add more email addresses as needed
);

// Check if the form is submitted
if (isset($_POST['send_mail'])) {
  // Create a new PHPMailer instance
  $mail = new PHPMailer(true);

  try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = $smtp_server;
    $mail->SMTPAuth = true;
    $mail->Username = $smtp_username;
    $mail->Password = $smtp_password;
    $mail->SMTPSecure = 'tls';
    $mail->Port = $smtp_port;

    // Sender
    $mail->setFrom($sender_email);

    // Add recipients
    foreach ($receiver_emails as $receiver_email) {
      $mail->addAddress($receiver_email);
    }

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Student Report';

    // Your HTML content
    $html_content = '
            <html>
            <head>
                <title>Student Report</title>
            </head>
            <body>
                <h2>Student Report</h2>

                <table border="1">
                    <tr>
                        <th>StudentID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Grade</th>
                        <th>Photo</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mohit Patel</td>
                        <td>john@example.com</td>
                        <td>A</td>
                        <td><img src="https://avatars.githubusercontent.com/u/109367447?v=4" alt="Mohit Patel"></td>
                    </tr>
                </table>

            </body>
            </html>
        ';

    $mail->Body = $html_content;

    // Send the email
    $mail->send();
    echo 'Email has been sent successfully!';
  } catch (Exception $e) {
    echo "Error: {$mail->ErrorInfo}";
  }
}
?>