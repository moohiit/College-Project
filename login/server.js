const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the current directory
app.use(express.static(__dirname));
// Add a route for serving your JavaScript file
app.get("/frontend.js", (req, res) => {
  res.sendFile(__dirname + "/frontend.js");
});

// MySQL database connection for admin data
const adminDb = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Replace with your admin database password
  database: "admin", // For admin data
});

// Create a MySQL table for admin users
adminDb.query(
  `CREATE TABLE IF NOT EXISTS admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)`,
  (err) => {
    if (err) {
      console.error("Error creating the admin table:", err);
    }
  }
);

// API endpoint for login
app.post("/login", (req, res) => {
  const { username, password, userType } = req.body;

  let dbConnection;

  if (userType === "faculty") {
    dbConnection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "", // Replace with your faculty database password
      database: "faculty", // For faculty data
    });
  } else if (userType === "admin") {
    dbConnection = adminDb;
  } else {
    return res.json({ success: false, message: "Invalid user type" });
  }

  // Query the database to find the user by username
  dbConnection.query(
    "SELECT * FROM " + userType + " WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Database error" });
      }

      if (results.length === 1) {
        if (results[0].password === password) {
          res.json({ success: true, message: "Login successful", reset:true});
        } else {
          res.json({
            success: false,
            message: "Incorrect password",
            reset: true,
          });
        }
      } else {
        res.json({ success: false, message: "User not found", reset: true });
      }
    }
  );

  // Close the database connection
  dbConnection.end();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
