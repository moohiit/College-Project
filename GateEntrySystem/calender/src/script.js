// script.js
// Your JSON data
var jsonData1 = {
  academicYear: [
    {
      term: "Term one (15 July-25 Dec)",
      months: [
        {
          name: "July",
          activities: [
            "1-14 July: End of Session & Back Log Completion",
            "15-Jul: Centrally Subject Allocation & Preparation of New Session",
          ],
        },
        {
          name: "August",
          activities: [
            "07-Aug: Session Start for II & III Year",
            "15-Aug: Independence Day",
            "16-25 August: Orientation & Induction",
            "Fourth & Fifth Saturday: Joint Freshers",
          ],
        },
        {
          name: "September",
          activities: [
            "05-Sep: Teachers Day",
            "Second or Third Saturday: Discipline Oath Taking",
          ],
        },
        {
          name: "October",
          activities: [
            "Every Saturday: KCMT Navratnas Hunting",
            "21/23 October: Navratra Mahautsav",
            "Dandiea Night",
          ],
        },
        {
          name: "November",
          activities: ["10-Nov: Dipawali Celebration"],
        },
        {
          name: "December",
          activities: [
            "The first week of December: Brijlal Memorial Tournament",
            "04-22 December: Mid Term Examinations",
            "23-Dec: Christmas Celebration",
            "25-Dec: Manavta Diwas",
          ],
        },
      ],
    },
    {
      term: "Term Two (1Jan-30 June)",
      months: [
        {
          name: "January",
          activities: [
            "01-Jan: New Year Celebration & Resolutions",
            "26-Jan: Republic Day Celebrations",
            "13/20/27 January: Interdepartmental Sports Completions",
          ],
        },
        {
          name: "February",
          activities: [
            "01-12 February: Management Run",
            "12-24 February: Annual Athletic meet",
            "03/10/17/24 February: Excursion Tours",
          ],
        },
        {
          name: "March",
          activities: [
            "2/9/16/30 March: National Conferences / Seminars",
            "23-Mar: Holi Celebrations",
          ],
        },
        {
          name: "April",
          activities: [
            "End Term Examinations: Annual Courses/ NEP",
            "20/27 April: HR Conclave",
            "21/28 April: Farewell Concluding Ceremony",
          ],
        },
        {
          name: "May",
          activities: ["4/11/18/25 May: FDP/ MDP / Refresher / Workshop"],
        },
        {
          name: "June",
          activities: [
            "AOPs for New Session: 01-30 June",
            "22-Jun: KCMT Foundation Day Celebrations",
          ],
        },
      ],
    },
  ],
};

// Function to populate terms in the first dropdown
function populateTerms() {
  var termDropdown1 = document.getElementById("term");

  jsonData1.academicYear.forEach(function (term) {
    var option = document.createElement("option");
    option.value = term.term;
    option.text = term.term;
    termDropdown1.add(option);
  });
}

// Function to populate months in the second dropdown based on selected term
function populateMonths() {
  var termDropdown1 = document.getElementById("term");
  var monthDropdown1 = document.getElementById("months");
  var activitiesDropdown1 = document.getElementById("activities");

  // Clear previous data
  monthDropdown1.innerHTML = "<option value=''>Select Month</option>";
  activitiesDropdown1.innerHTML = "<option value=''>Select Activity</option>";

  var selectedTerm1 = termDropdown1.value;

  if (selectedTerm1) {
    var selectedTermData1 = jsonData1.academicYear.find(function (term) {
      return term.term === selectedTerm1;
    });

    selectedTermData1.months.forEach(function (month) {
      var option = document.createElement("option");
      option.value = month.name;
      option.text = month.name;
      monthDropdown1.add(option);
    });

    // Populate activities dropdown
    populateActivities1();
  }
}

// Function to populate activities in the dropdown based on selected month
function populateActivities1() {
  var termDropdown = document.getElementById("term");
  var monthDropdown = document.getElementById("months");
  var activitiesDropdown = document.getElementById("activities");

  // Clear previous data
  activitiesDropdown.innerHTML = "<option value=''>Select Activity</option>";

  var selectedTerm = termDropdown.value;
  var selectedMonth = monthDropdown.value;

  if (selectedTerm && selectedMonth) {
    var selectedTermData = jsonData1.academicYear.find(function (term) {
      return term.term === selectedTerm;
    });

    var selectedMonthData = selectedTermData.months.find(function (month) {
      return month.name === selectedMonth;
    });

    selectedMonthData.activities.forEach(function (activity) {
      var option = document.createElement("option");
      option.value = activity;
      option.text = activity;
      activitiesDropdown.add(option);
    });
  }
}

// Populate the terms on page load
populateTerms();

//----------------------------------------------------------------

//Add row funtion
function addRow1() {
  // Get form values
  var term = document.getElementById("term").value;
  var month1 = document.getElementById("months").value;
  var activity1 = document.getElementById("activities").value;
  var startDay1 = document.getElementById("startDay-1").value;
  var endDay1 = document.getElementById("endDay-1").value;
  var inCharge1 = document.getElementById("inCharge-1").value;
  var objective1 = document.getElementById("objective-1").value;
  var outcome1 = document.getElementById("outcome-1").value;

  // Remove previous error message
  var errorElement = document.getElementById("dateValidationError1");
  if (errorElement) {
    errorElement.parentNode.removeChild(errorElement);
  }

  // Date validation
  if (startDay1 > endDay1) {
    // Display error message in red text
    var errorDiv1 = document.createElement("div");
    errorDiv1.id = "dateValidationError1";
    errorDiv1.style.color = "red";
    errorDiv1.textContent =
      "Start date must be smaller than or equal to end date.";
    document.getElementById("calendarForm1").appendChild(errorDiv1);

    // Remove selected dates
    document.getElementById("startDay-1").value = "";
    document.getElementById("endDay-1").value = "";
    return;
  }

  // Create a new row
  var newRow1 = document.createElement("tr");

  // Adjust the date range display based on whether start and end dates are the same
  var dateRangeDisplay1 =
    startDay1 !== endDay1
      ? `${startDay1} - ${endDay1} ${month1}`
      : `${startDay1} - ${month1}`;

  newRow1.innerHTML = `
        <td>${term}</td>
        <td>${activity1}</td>
        <td>${month1}</td>
        <td>${dateRangeDisplay1}</td>
        <td>${inCharge1}</td>
        <td>${objective1}</td>
        <td>${outcome1}</td>
    `;

  // Append the row to the table
  document
    .getElementById("calendarTable-1")
    .getElementsByTagName("tbody")[0]
    .appendChild(newRow1);

  // Clear form fields
  document.getElementById("term").value = "";
  document.getElementById("activities").value = "";
  document.getElementById("months").value = "";
  document.getElementById("startDay-1").value = "";
  document.getElementById("endDay-1").value = "";
  document.getElementById("inCharge-1").value = "";
  document.getElementById("objective-1").value = "";
  document.getElementById("outcome-1").value = "";
}



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
  var year = document.getElementById("year").value;
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
      ? `${startDay} - ${endDay} ${month}`
      : `${startDay} - ${month}`;

  newRow.innerHTML = `
        <td>${department}</td>
        <td>${activity}</td>
        <td>${year}</td>
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
  document.getElementById("year").value = "";
  document.getElementById("month").value = "";
  document.getElementById("startDay").value = "";
  document.getElementById("endDay").value = "";
  document.getElementById("inCharge").value = "";
  document.getElementById("objective").value = "";
  document.getElementById("outcome").value = "";
}



// script.js

// JavaScript to set the current year in the heading
// Get the current date
var currentDate = new Date();

// Determine the academic session based on the current month
var startYear, endYear;
if (currentDate.getMonth() >= 6) {
  // If the current month is July or later, consider it as the start of a new academic session
  startYear = currentDate.getFullYear();
  endYear = startYear + 1;
} else {
  // If the current month is before July, consider it as the end of the previous academic session
  endYear = currentDate.getFullYear();
  startYear = endYear - 1;
}

// Display the academic session in the format "2023-2023"
var academicSession = startYear + "-" + endYear;
console.log(academicSession);

// Update the content of the HTML elements
document.getElementById("currentYear1").textContent = academicSession;
document.getElementById("currentYear").textContent = academicSession;


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

  // Get tables
  var table1 = document.getElementById("calendarTable-1");
  var table2 = document.getElementById("calendarTable");

  // Create worksheets from tables
  var worksheet1 = XLSX.utils.table_to_sheet(table1);
  var worksheet2 = XLSX.utils.table_to_sheet(table2);

  // Convert worksheets to JSON
  var data1 = XLSX.utils.sheet_to_json(worksheet1, { header: 1 });
  var data2 = XLSX.utils.sheet_to_json(worksheet2, { header: 1 });

  // Add headings for table1 data
  data1.unshift(["IILA- Identified Institute-Level Activities"]);
  // Add headings for table2 data
  data2.unshift(["IDLA- Identified Department Level Activities"]);

  // Concatenate data from both worksheets
  var combinedData = data1.concat(data2);

  // Create a new worksheet with the combined data
  var combinedWorksheet = XLSX.utils.json_to_sheet(combinedData, {
    skipHeader: true,
  });

  // Add the combined worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, combinedWorksheet, "Calendar");

  // Save the Excel file
  XLSX.writeFile(workbook, "calendar.xlsx");
}

