<?php
$mysqli = new mysqli("localhost", "root", "", "student");

if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];

  // File upload handling
  $targetDir = "uploads/";
  $uploadOk = 1;

  // Check if a file was selected from the file input
  if (!empty($_FILES["photo"]["name"])) {
    $originalFileName = basename($_FILES["photo"]["name"]);
    $uniqueIdentifier = uniqid();
    $targetFile = $targetDir . $name . "_" . $uniqueIdentifier . "_" . $originalFileName; // Use uniqueid for uniqueness
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Check if image file is a valid image
    $check = getimagesize($_FILES["photo"]["tmp_name"]);
    if ($check === false) {
      echo "File is not a valid image.";
      $uploadOk = 0;
    }

    // Check file size (not more than 100KB)
    if ($_FILES["photo"]["size"] > 100000) {
      echo "Sorry, your file is too large (max 100KB).";
      $uploadOk = 0;
    }

    // Allow only certain file formats
    if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
      echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
      $uploadOk = 0;
    }

    // Check if file already exists
    if (file_exists($targetFile)) {
      echo "Sorry, file already exists.";
      $uploadOk = 0;
    }

    // Generate a unique photo URL
    $photo_url = $targetFile;

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
      echo "Sorry, your file was not uploaded.";
    } else {
      if (move_uploaded_file($_FILES["photo"]["tmp_name"], $targetFile)) {
        echo "The file " . htmlspecialchars($originalFileName) . " has been uploaded.";

        // Insert the student record into the database with the same name as the photo URL
        $stmt = $mysqli->prepare("INSERT INTO students (name, photo_url) VALUES (?, ?)");
        $stmt->bind_param("ss", $name, $photo_url);
        $stmt->execute();
        $stmt->close();
      } else {
        echo "Sorry, there was an error uploading your file.";
      }
    }
  } elseif (!empty($_POST["camera_photo"])) {
    // Handle photo taken from camera
    $encoded_image = $_POST["camera_photo"];
    $decoded_image = base64_decode($encoded_image);

    // Check if the decoded image is larger than 100KB
    if (strlen($decoded_image) > 100000) {
      echo "Sorry, the captured photo size exceeds 100KB.";
    } else {
      $uniqueIdentifier = uniqid();
      // Generate a unique photo URL for camera photo
      $photo_url = $targetDir . $name . "_camera_" . $uniqueIdentifier . ".jpg";

      // Save the decoded image to the file
      if (file_put_contents($photo_url, $decoded_image)) {
        echo "The camera photo has been uploaded.";

        // Insert the student record into the database with the same name as the photo URL
        $stmt = $mysqli->prepare("INSERT INTO students (name, photo_url) VALUES (?, ?)");
        $stmt->bind_param("ss", $name, $photo_url);
        $stmt->execute();
        $stmt->close();
      } else {
        echo "Sorry, there was an error uploading the camera photo.";
      }
    }
  }
}

$mysqli->close();

// header("Location: index.php");
// exit();
?>