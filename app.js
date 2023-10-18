const express = require("express");
const app = express();
const port = 3000;

const ExcelJS = require("exceljs");
const workbook = new ExcelJS.Workbook();
let worksheet;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JavaScript)
app.use(express.static(__dirname));

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

// Load existing data from the Excel file when the server starts
workbook.xlsx
  .readFile("responses.xlsx")
  .then(() => {
    // Assuming the worksheet is named 'FormResponses'
    worksheet = workbook.getWorksheet("FormResponses");
  })
  .catch((error) => {
    // Handle the case when the file doesn't exist yet or there is an error
    // Creating a new worksheet and adding headers
    worksheet = workbook.addWorksheet("FormResponses");
    // Add headers here
    const headers = [
      "Department",
      "Faculty",
      "Zone/Region",
      "College/School",
      "Date",
      "Location",
      "TGT_Teachers",
      "TGT_Count",
      "PGT_Teachers",
      "PGT_Count",
      "Workshop_Conducted",
      "Metriculation_Count",
      "Intermediate_Count",
      "Topic_Discussed",
      "Next_Visit",
    ]; // Replace with your actual field names
    worksheet.addRow(headers);
  });

// Handle form submission
app.post("/submit", (req, res) => {
  const data = req.body;

  // Check if the worksheet is already defined (it should be from the previous step)
  // Add the form data to the Excel sheet
  const values = Object.values(data);
  worksheet.addRow(values);

  // Save the Excel file
  workbook.xlsx
    .writeFile("responses.xlsx")
    .then(() => {
      console.log("Data saved to responses.xlsx");
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
