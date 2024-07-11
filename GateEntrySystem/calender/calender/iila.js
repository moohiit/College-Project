// script.js
// Your JSON data
var jsonData = {
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
  var termDropdown = document.getElementById("term");

  jsonData.academicYear.forEach(function (term) {
    var option = document.createElement("option");
    option.value = term.term;
    option.text = term.term;
    termDropdown.add(option);
  });
}

// Function to populate months in the second dropdown based on selected term
function populateMonths() {
  var termDropdown = document.getElementById("term");
  var monthDropdown = document.getElementById("months");
  var activitiesDropdown = document.getElementById("activities");

  // Clear previous data
  monthDropdown.innerHTML = "<option value=''>Select Month</option>";
  activitiesDropdown.innerHTML = "<option value=''>Select Activity</option>";

  var selectedTerm = termDropdown.value;

  if (selectedTerm) {
    var selectedTermData = jsonData.academicYear.find(function (term) {
      return term.term === selectedTerm;
    });

    selectedTermData.months.forEach(function (month) {
      var option = document.createElement("option");
      option.value = month.name;
      option.text = month.name;
      monthDropdown.add(option);
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
    var selectedTermData = jsonData.academicYear.find(function (term) {
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
  var month = document.getElementById("months").value;
  var activity = document.getElementById("activities").value;
  var startDay = document.getElementById("startDay-1").value;
  var endDay = document.getElementById("endDay-1").value;
  var inCharge = document.getElementById("inCharge-1").value;
  var objective = document.getElementById("objective-1").value;
  var outcome = document.getElementById("outcome-1").value;

  // Remove previous error message
  var errorElement = document.getElementById("dateValidationError1");
  if (errorElement) {
    errorElement.parentNode.removeChild(errorElement);
  }

  // Date validation
  if (startDay > endDay) {
    // Display error message in red text
    var errorDiv = document.createElement("div");
    errorDiv.id = "dateValidationError1";
    errorDiv.style.color = "red";
    errorDiv.textContent =
      "Start date must be smaller than or equal to end date.";
    document.getElementById("calendarForm1").appendChild(errorDiv);

    // Remove selected dates
    document.getElementById("startDay-1").value = "";
    document.getElementById("endDay-1").value = "";
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
        <td>${term}</td>
        <td>${activity}</td>
        <td>${month}</td>
        <td>${dateRangeDisplay}</td>
        <td>${inCharge}</td>
        <td>${objective}</td>
        <td>${outcome}</td>
    `;

  // Append the row to the table
  document
    .getElementById("calendarTable-1")
    .getElementsByTagName("tbody")[0]
    .appendChild(newRow);

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
  var table = document.getElementById("calendarTable-1");

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

// script.js

