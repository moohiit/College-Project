<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Login Page</title>
</head>

<body>
  <div class="login-container">
    <form action="../login_process.php" method="post" class="login-form">
      <h1>Login</h1>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter your username">

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your password">

      <button type="submit">Login</button>
    </form>
  </div>
</body>

</html>
