<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Information and Image Upload</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h2>Student Information and Image Upload</h2>

  <form action="upload.php" method="post" enctype="multipart/form-data">
    
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" required><br>

    <label for="department">Department:</label>
    <input type="text" name="department" id="department" required><br>

    <label for="year">Year:</label>
    <input type="text" name="year" id="year" required><br>

    <label for="mobile">Mobile:</label>
    <input type="text" name="mobile" id="mobile" required><br>

    <label for="image">Select Image:</label>
    <input type="file" name="image" id="image" required><br>

    <button type="submit" name="submit">Upload Image and Save</button>
  </form>
  <!-- Add this link at the end of your index.html -->
  <a href="display_students.php" target="_blank">View Student Records</a>

</body>

</html>