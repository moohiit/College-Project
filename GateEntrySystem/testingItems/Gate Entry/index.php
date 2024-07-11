<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>KCMT GATE LOGIN</title>
  <link rel="stylesheet" href="./style.css">

</head>

<body>
  <!-- partial:index.partial.html -->
  <div class="full-body">
    <div class="wrapper">
      <div class="title-text">
        <div class="title login">Login Form</div>
        <div class="title signup">Signup Form</div>
      </div>
      <!-- Add this code inside the <body> tag -->
      <?php
      session_start();
      if (isset($_SESSION['loginError'])) {
        echo '<div class="alert" ><p  style="color: red;">' . $_SESSION['loginError'] . '</p></div>';
        unset($_SESSION['loginError']);
      }
      ?>
      <!-- Add this code inside the <body> tag, after the login error message code -->
      <?php
      if (isset($_SESSION['signupError'])) {
        echo '<div class="alert" ><p class="alert" style="color: red;">' . $_SESSION['signupError'] . '</p></div>';
        unset($_SESSION['signupError']);
      }
      ?>
      <div class="form-container">
        <div class="slide-controls">
          <input type="radio" name="slide" id="login" checked>
          <input type="radio" name="slide" id="signup">
          <label for="login" class="slide login">Login</label>
          <label for="signup" class="slide signup">Signup</label>
          <div class="slider-tab"></div>
        </div>
        <div class="form-inner">
          <form action="login_process.php" method="post" class="login">
            <div class="field">
              <input type="text" name="username" placeholder="Username" required>
            </div>
            <div class="field">
              <input name="password" type="password" placeholder="Password" required>
            </div>
            <div class="pass-link"><a href="#">Forgot password?</a></div>
            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Login">
            </div>
            <div class="signup-link">Not a member? <a href="">Signup now</a></div>
          </form>
          <form action="register_process.php" method="post" class="signup">
            <div class="field">
              <input type="text" name="username" placeholder="Username" required>
            </div>
            <div class="field">
              <input type="password" name="password" placeholder="Password" required>
            </div>
            <div class="field">
              <input type="password" placeholder="Confirm password" required>
            </div>
            <div class="field btn">
              <div class="btn-layer"></div>
              <input type="submit" value="Signup">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- partial -->
  <script src="./script.js"></script>

</body>

</html>