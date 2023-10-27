const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Add the following code after defining your 'app' instance
// Serve static files from the current directory
app.use(express.static(__dirname));
// Add a route for serving your JavaScript file
app.get("/frontend.js", (req, res) => {
  res.sendFile(__dirname + "/frontend.js");
});

// MySQL database connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Replace with your database password
  database: "users",
});

// Create a MySQL table for users
db.query(
  `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)`,
  (err) => {
    if (err) {
      console.error("Error creating the users table:", err);
    }
  }
);

// API endpoint for login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Query the database to find the user by username
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Database error" });
      }

      if (results.length === 1) {
        if (results[0].password === password) {
          res.json({ success: true, message: "Login successful" });
        } else {
          res.json({ success: false, message: "Incorrect password" });
        }
      } else {
        res.json({ success: false, message: "User not found" });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
