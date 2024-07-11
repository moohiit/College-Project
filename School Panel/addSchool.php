<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div class="city">
    <select name="city" id="city">
      <!-- Dynamically add options for city using php  -->
      <?php foreach ($cities as $city) { ?>
        <option value="<?php echo $city['id']; ?>"><?php echo $city['name']; ?></option>
      <?php }
      ?>
    </select>
  </div>
</body>
</html>