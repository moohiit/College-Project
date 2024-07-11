<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>View Student</title>
</head>

<body>
  <h1>View Student</h1>

  <?php
  $mysqli = new mysqli("localhost", "root", "", "student");
  if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
  }

  if (isset($_GET['id'])) {
    $student_id = $_GET['id'];

    // Fetch student details
    $stmt = $mysqli->prepare("SELECT * FROM students WHERE id = ?");
    $stmt->bind_param("i", $student_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $stmt->close();

    if ($result->num_rows > 0) {
      $row = $result->fetch_assoc();
      echo "<p>Name: {$row['name']}</p>";
      echo "<img src='{$row['photo_url']}' alt='Student Photo'>";
    } else {
      echo "Student not found.";
    }
  } else {
    echo "Invalid request.";
  }

  $mysqli->close();
  ?>

  <p><a href="index.php">Back to Student Records</a></p>
  <p><a href="add_student.php">Back to Add Student</a></p>
</body>

</html>