<?php
// Database connection details
$dbHost = "localhost";
$dbUser = "root";
$dbPassword = "";
$dbName = "gate";

// Connect to the database
$conn = new mysqli($dbHost, $dbUser, $dbPassword, $dbName);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Fetch student records from the database
$sql = "SELECT * FROM student";
$result = $conn->query($sql);

// Close the database connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Records</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
    }

    .card {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }

    .card img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  </style>
</head>

<body>
  <h2>Student Records</h2>

  <?php
  // Check if there are records
  if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      ?>
      <div class="card">
        <?php
        // Display student information
        echo "<h3>{$row['name']}</h3>";
        echo "<p>Department: {$row['department']}</p>";
        echo "<p>Year: {$row['year']}</p>";
        echo "<p>Mobile: {$row['conumber']}</p>";
        echo "<img src='{$row['photo_url']}' alt='{$row['name']}'><br>";
        ?>
      </div>
      <?php
    }
  } else {
    echo "No student records found.";
  }
  ?>
</body>

</html>