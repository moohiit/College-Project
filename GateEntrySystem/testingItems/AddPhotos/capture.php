<?php
$mysqli = new mysqli("localhost", "root", "", "gate");

if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];

  if (!empty($_POST["camera_photo"])) {
    $encoded_image = $_POST["camera_photo"];
    $decoded_image = base64_decode(str_replace('data:image/jpeg;base64,', '', $encoded_image));

    $targetDir = "uploads/";
    $uniqueIdentifier = uniqid();
    $photo_url = $targetDir . $name . "_camera_" . $uniqueIdentifier . ".jpg";

    if (file_put_contents($photo_url, $decoded_image)) {
      //start session
      session_start();
      $stmt = $mysqli->prepare("INSERT INTO students (name, photo_url) VALUES (?, ?)");
      $stmt->bind_param("ss", $name, $photo_url);
      $stmt->execute();
      $stmt->close();
      $_SESSION["status"]="The camera photo has been uploaded.";
      //header to index
      header("Location: index.php");
      exit();
    } else {
      $_SESSION["status"]= "Sorry, there was an error uploading the camera photo.";
    }
  }
}

$mysqli->close();
?>