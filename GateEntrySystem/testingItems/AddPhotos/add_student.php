<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webcam and File Photo Capture</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<form action="capture.php" method="post" enctype="multipart/form-data">
  <label for="name">Name:</label>
  <input type="text" name="name" required>
  
  <video id="video" width="640" height="480" autoplay></video>
  <button type="button" id="captureButton">Capture Photo</button>
  <canvas id="canvas" width="640" height="480" style="display:none;"></canvas>

  <input type="hidden" name="camera_photo" id="cameraPhotoInput">

  <label for="filePhoto">Select Photo from Device:</label>
  <input type="file" name="file_photo" id="filePhoto">

  <input type="submit" value="Submit">
</form>
<div>
    <a href="index.php">Back to Home</a>
</div>

<script>
document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const captureButton = document.getElementById('captureButton');
  const cameraPhotoInput = document.getElementById('cameraPhotoInput');
  const filePhotoInput = document.getElementById('filePhoto');
  
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        video.srcObject = stream;
      })
      .catch(function(error) {
        console.error('Error accessing webcam:', error);
      });

    captureButton.addEventListener('click', function() {
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL('image/jpeg');
      cameraPhotoInput.value = imageData;
      alert('Photo captured!');
    });
  } else {
    console.error('Webcam not supported on this browser.');
  }

  filePhotoInput.addEventListener('change', function() {
    const fileInput = this;
    const file = fileInput.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imageData = e.target.result;
        cameraPhotoInput.value = imageData;
        alert('File photo selected!');
      };
      reader.readAsDataURL(file);
    }
  });
});
</script>

</body>
</html>
