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

// Database connection details
$host = "localhost";
$dbname = "gate";
$username = "root";
$password = "";

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

    // Fetch data from the database
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $stmt = $pdo->query("SELECT * from inqury_data where date=CURRENT_DATE");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Build HTML content dynamically
    $html_content = '<html><head><title>Student Report</title></head><body>';
    $html_content .= '<h2>Student Report</h2>';
    $html_content .= '<table border="1">';
    $html_content .= '<tr><th>Name</th><th>Department</th><th>Contact</th><th>Reason</th><th>Status</th><th>Time</th><th>Date</th><th>Photo</th></tr>';

    foreach ($data as $row) {
      $html_content .= '<tr>';
      $html_content .= '<td>' . $row['name'] . '</td>';
      $html_content .= '<td>' . $row['dprt'] . '</td>';
      $html_content .= '<td>' . $row['contact'] . '</td>';
      $html_content .= '<td>' . $row['reason'] . '</td>';
      $html_content .= '<td>' . $row['status'] . '</td>';
      $html_content .= '<td>' . $row['currentime'] . '</td>';
      $html_content .= '<td>' . $row['date'] . '</td>';
      $html_content .= '<td><img width="100" height="100" src="https://avatars.githubusercontent.com/u/109367447?v=4" alt="Photo"></td>';
      $html_content .= '</tr>';
    }

    $html_content .= '</table></body></html>';

    $mail->Body = $html_content;

    // Send the email
    $mail->send();
    echo 'Email has been sent successfully!';
  } catch (Exception $e) {
    echo "Error: {$mail->ErrorInfo}";
  }
}
?>