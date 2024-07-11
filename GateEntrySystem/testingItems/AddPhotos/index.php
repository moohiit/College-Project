<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Records</title>
</head>

<body>
  <h1>Student Records</h1>

  <div>
    <p style="color: green; font-size: larger;">
    <?php
    //session start
    session_start();
    if (isset($_SESSION["status"])) {
      echo $_SESSION["status"];
      unset($_SESSION["status"]);
    }
    ?>
    </p>
  </div>

  <?php
  $mysqli = new mysqli("localhost", "root", "", "student");

  if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
  }

  $result = $mysqli->query("SELECT * FROM students");

  echo "<table border='1'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>";

  while ($row = $result->fetch_assoc()) {
    echo "<tr>
                <td>{$row['id']}</td>
                <td>{$row['name']}</td>
                <td>
                    <a href='view_student.php?id={$row['id']}'>View Photo</a>
                </td>
            </tr>";
  }

  echo "</table>";

  $mysqli->close();
  ?>

  <div>
    <a href="add_student.php">Add Student</a>
  </div>
</body>

</html>