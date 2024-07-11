// Your JSON data for form 2
var jsonData = {
  departments: {
    MBA: [
      "Presentations",
      "Case Studies",
      "Simulation Exercises",
      "Ad Mad Show",
      "Research Project Work",
      "Market Survey",
      "On The Job Trainings",
      "Swayam Certification",
      "NTPL Course",
      "Guest Lecture",
      "Workshops",
      "Seminar / Conference",
      "Industrial Visit",
      "Marathon Certification",
      "Hackathon Certification",
      "Web & Software Certification",
      "Domain Module",
      "Entrepreneurship Program",
      "Textile Laboratory",
      "Fashion & Beauty workshop",
      "Virology Workshop",
      "Phlebotomy Workshop",
      "Bio Informatics Workshop",
      "Bio Chemistry Workshop",
      "Apiculture Workshop",
      "Fisheries Culture Workshop",
      "Fungi Culture Workshop",
      "Alga culture Workshop",
      "Hydroponic Workshop",
      "Agro & Horticulture Workshop",
      "Aromatic Che. Certification",
      "Hardware workshop",
      "Food & Nutrition Workshop",
      "First Aid & Emergency Care",
      "Comp. Accounting Certification",
      "Data Analytics Certification",
    ],
    BBA: [
      "Presentations",
      "Case Studies",
      "Simulation Exercises",
      "Ad Mad Show",
      "Research Project Work",
      "Market Survey",
      "On The Job Trainings",
      "Swayam Certification",
      "NTPL Course",
      "Guest Lecture",
      "Workshops",
      "Seminar / Conference",
      "Industrial Visit",
      "Web & Software Certification",
      "Textile Laboratory",
      "First Aid & Emergency Care",
    ],
    MCom: [
      "Presentations",
      "Case Studies",
      "Simulation Exercises",
      "Research Project Work",
      "Market Survey",
      "On The Job Trainings",
      "Swayam Certification",
      "NTPL Course",
      "Guest Lecture",
      "Workshops",
      "Seminar / Conference",
      "Marathon Certification",
      "Web & Software Certification",
      "Textile Laboratory",
      "First Aid & Emergency Care",
      "Comp. Accounting Certification",
      "Data Analytics Certification",
    ],
    "B. Com-H": [
      "Presentations",
      "Case Studies",
      "Simulation Exercises",
      "Research Project Work",
      "Guest Lecture",
      "Workshops",
      "Seminar / Conference",
      "Industrial Visit",
      "Marathon Certification",
      "Web & Software Certification",
      "Textile Laboratory",
      "Fashion & Beauty workshop",
      "Agro & Horticulture Workshop",
      "First Aid & Emergency Care",
      "Comp. Accounting Certification",
    ],
    "B.Com": [
      "Presentations",
      "Case Studies",
      "Simulation Exercises",
      "Research Project Work",
      "Market Survey",
      "Guest Lecture",
      "Workshops",
      "Seminar / Conference",
      "Industrial Visit",
      "Marathon Certification",
      "Web & Software Certification",
      "Fashion & Beauty workshop",
      "First Aid & Emergency Care",
      "Comp. Accounting Certification",
    ],
    MCA: [
      "Presentations",
      "Swayam Certification",
      "NTPL Course",
      "Guest Lecture",
      "Workshops",
      "Seminar / Conference",
      "Marathon Certification",
      "Hackathon Certification",
      "Web & Software Certification",
      "Offsite Laboratory Work",
      "Domain Module",
      "Entrepreneurship Program",
      "Aromatic Che. Certification",
      "Hardware workshop",
      "First Aid & Emergency Care",
    ],
    BCA: [
      "Presentations",
      "Guest Lecture",
      "Workshops",
      "Seminar / Conference",
      "Hackathon Certification",
      "Web & Software Certification",
      "First Aid & Emergency Care",
    ],
    MSc: [
      "Presentations",
      "Guest Lecture",
      "Workshops",
      "Seminar / Conference",
      "Marathon Certification",
      "Offsite Laboratory Work",
      "Textile Laboratory",
      "Fashion & Beauty workshop",
      "Virology Workshop",
      "Phlebotomy Workshop",
      "Bio Informatics Workshop",
      "Bio Chemistry Workshop",
      "Apiculture Workshop",
      "Fisheries Culture Workshop",
      "Fungi Culture Workshop",
      "Alga culture Workshop",
      "Hydroponic Workshop",
      "Agro & Horticulture Workshop",
      "Aromatic Che. Certification",
      "Food & Nutrition Workshop",
      "First Aid & Emergency Care",
    ],
    BSc: [
      "Presentations",
      "Guest Lecture",
      "Workshops",
      "Seminar / Conference",
      "Offsite Laboratory Work",
      "Textile Laboratory",
      "Fashion & Beauty workshop",
      "Virology Workshop",
      "Phlebotomy Workshop",
      "Bio Informatics Workshop",
      "Bio Chemistry Workshop",
      "Fungi Culture Workshop",
      "Alga culture Workshop",
      "Hydroponic Workshop",
      "Agro & Horticulture Workshop",
      "Aromatic Che. Certification",
      "Food & Nutrition Workshop",
      "First Aid & Emergency Care",
    ],
  },
};

// Function to populate departments in the first dropdown
function populateDepartments() {
  var departmentDropdown = document.getElementById("department");

  for (var department in jsonData.departments) {
    var option = document.createElement("option");
    option.value = department;
    option.text = department;
    departmentDropdown.add(option);
  }
}

// Function to populate activities in the second dropdown based on selected department
function populateActivities() {
  var departmentDropdown = document.getElementById("department");
  var activityDropdown = document.getElementById("activity");

  // Clear previous data
  activityDropdown.innerHTML = "<option value=''>Select Activity</option>";

  var selectedDepartment = departmentDropdown.value;

  if (selectedDepartment) {
    jsonData.departments[selectedDepartment].forEach(function (activity) {
      var option = document.createElement("option");
      option.value = activity;
      option.text = activity;
      activityDropdown.add(option);
    });
  }
}
// Populate the departments on page load
populateDepartments();

//------------------------------
// Function to update day options based on the selected month
function updateDayOptions() {
  var monthSelect = document.getElementById("month");
  var startDaySelect = document.getElementById("startDay");
  var endDaySelect = document.getElementById("endDay");

  // Clear existing options
  startDaySelect.innerHTML = '<option value="">Select Day</option>';
  endDaySelect.innerHTML = '<option value="">Select Day</option>';

  // Get the selected month
  var selectedMonth = monthSelect.value;

  // Determine the number of days in the selected month
  var daysInMonth = new Date(
    new Date().getFullYear(),
    new Date(selectedMonth + " 1, 2000").getMonth() + 1,
    0
  ).getDate();

  // Generate day options dynamically
  for (var i = 1; i <= daysInMonth; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    startDaySelect.add(option);
    endDaySelect.add(option.cloneNode(true));
  }
}
//--------------------------------------------
function addRow2() {
  // Get form values
  var department = document.getElementById("department").value;
  var activity = document.getElementById("activity").value;
  var month = document.getElementById("month").value;
  var startDay = document.getElementById("startDay").value;
  var endDay = document.getElementById("endDay").value;
  var inCharge = document.getElementById("inCharge").value;
  var objective = document.getElementById("objective").value;
  var outcome = document.getElementById("outcome").value;

  // Remove previous error message
  var errorElement = document.getElementById("dateValidationError");
  if (errorElement) {
    errorElement.parentNode.removeChild(errorElement);
  }

  // Date validation
  if (startDay > endDay) {
    // Display error message in red text
    var errorDiv = document.createElement("div");
    errorDiv.id = "dateValidationError";
    errorDiv.style.color = "red";
    errorDiv.textContent =
      "Start date must be smaller than or equal to end date.";
    document.getElementById("calendarForm").appendChild(errorDiv);

    // Remove selected dates
    document.getElementById("startDay").value = "";
    document.getElementById("endDay").value = "";
    return;
  }

  // Create a new row
  var newRow = document.createElement("tr");

  // Adjust the date range display based on whether start and end dates are the same
  var dateRangeDisplay =
    startDay !== endDay
      ? `${startDay} - ${endDay}-${month}`
      : `${startDay} - ${month}`;

  newRow.innerHTML = `
        <td>${department}</td>
        <td>${activity}</td>
        <td>${month}</td>
        <td>${dateRangeDisplay}</td>
        <td>${inCharge}</td>
        <td>${objective}</td>
        <td>${outcome}</td>
    `;

  // Append the row to the table
  document
    .getElementById("calendarTable")
    .getElementsByTagName("tbody")[0]
    .appendChild(newRow);

  // Clear form fields
  document.getElementById("department").value = "";
  document.getElementById("activity").value = "";
  document.getElementById("month").value = "";
  document.getElementById("startDay").value = "";
  document.getElementById("endDay").value = "";
  // document.getElementById("course").value = "";
  document.getElementById("inCharge").value = "";
  document.getElementById("objective").value = "";
  document.getElementById("outcome").value = "";
}

// JavaScript to set the current year in the heading
document.getElementById("currentYear").textContent = new Date().getFullYear();

// script.js

function previewCalendar() {
  // Get the table HTML content
  var tableHtml = document.getElementById("tables").outerHTML;

  // Open a new window to display the preview
  var previewWindow = window.open("", "_blank");
  previewWindow.document.open();
  previewWindow.document.write(`
        <html>
            <head>
                <title>Calendar Preview</title>
                <style>
                    body {
                        font-family: "Arial", sans-serif;
                        background-color: #f8f8f8;
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    h2{
                      color:grey;
                      font-size:larger;
                      font-weight:700;
                    }
                    table {
                        border-collapse: collapse;
                        width: 100%;
                        margin-bottom: 20px;
                        background-color: #fff;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        border-radius: 8px;
                        overflow: hidden;
                    }

                    th, td {
                        border: 1px solid #ddd;
                        padding: 5px;
                        text-align: left;
                    }

                    th {
                        background-color: #4caf50;
                        color: white;
                    }

                    tbody tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }

                    tbody tr:nth-child(odd) {
                        background-color: #ffffff;
                    }
                </style>
            </head>
            <body>
                ${tableHtml}
            </body>
        </html>
    `);
  previewWindow.document.close();
}

function downloadPDF() {
  // Get the table HTML content
  var tableHtml = document.getElementById("tables").outerHTML;

  // Convert HTML to PDF using html2pdf
  html2pdf(tableHtml, {
    margin: 10,
    filename: "calendar.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
  });
}

function downloadExcel() {
  // Create a new SheetJS workbook
  var workbook = XLSX.utils.book_new();

  // Get the table
  var table = document.getElementById("calendarTable");

  // Create a worksheet from the table
  var worksheet = XLSX.utils.table_to_sheet(table);

  // Convert the worksheet to JSON
  var data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // Create a new worksheet with the data
  var combinedWorksheet = XLSX.utils.json_to_sheet(data, { skipHeader: true });

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, combinedWorksheet, "Calendar");

  // Save the Excel file
  XLSX.writeFile(workbook, "calendar.xlsx");
}
