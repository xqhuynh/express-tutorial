$(readyNow);

function readyNow() {
  console.log("hello");
  // Target click listeners
  $(".submitButton").on("click", textInputOnSubmit);
  // Dynamic click listener
  // ${EXISTS NOW}.on('click', 'EXISTS LATER', handleClick)
  // select class/id in index.html that already exists
  $(".employeesRows").on("click", ".deleteBtn", onDeleteBtn);
}

// Create empty array to push in new object
let totalMonthlyExpense = [];

// Function to get input values
function textInputOnSubmit() {
  // Get user inputs and store in new object
  let newEmployee = {
    firstNameResult: $(".firstNameInput").val(),
    lastNameResult: $(".lastNameInput").val(),
    idNumberResult: $(".idNumberInput").val(),
    titleResult: $(".titleInput").val(),
    salaryResult: $(".annualSalaryInput").val(),
  };
  // Push object into empty array
  totalMonthlyExpense.push(newEmployee);
  // Empty inputs after user clicks submit
  $(".employeeForm").val("");
  // Call calculateMonthlyExpense function
  calculateMonthlyExpense();
  displayEmployeeInfo();
}

// Function to calculate monthly expense
function calculateMonthlyExpense() {
  // loop through array
  // for each annual salary, divide by 12 months
  let sumSalary = 0;
  for (let annualSalary of totalMonthlyExpense) {
    sumSalary += annualSalary.salaryResult / 12;
    console.log(annualSalary.salaryResult);
  }
  let monthlyOut = $(".totalMonthlyOut");
  monthlyOut.empty();
  monthlyOut.append(`$ `, sumSalary.toFixed(2));
  if (sumSalary > 20000) {
    monthlyOut.css("background", "red");
  }
}

// Function to display employee info
function displayEmployeeInfo() {
  // Target employees table output
  let employeeInfo = $(".employeesRows");
  // Clear DOM
  employeeInfo.empty();
  for (let employees of totalMonthlyExpense) {
    employeeInfo.append(`<tr>
    <td>${employees.firstNameResult}</td>
    <td>${employees.lastNameResult}</td>
    <td>${employees.idNumberResult}</td>
    <td>${employees.titleResult}</td>
    <td>${employees.salaryResult}</td>
    <td><button class="deleteBtn" data-employee-id>Delete</button></td>
    </tr>`);
  }
}

function onDeleteBtn() {
  // Remove row that's clicked on
  $(this).closest("tr").remove();
  //$(this).parent().parent().remove();
  // button  td      tr
  // Note: row will be deleted but annual salary in array will still be present
  // 1. Figure out id of $(this) employee
  const employeeID = $(this).data("employee-id");
  let matchingEmployee;
  // 2. Find employee object
  for (let employees of totalMonthlyExpense) {
    if(matchingEmployee = )
  }
}

// DOM Notes -----------------------------------------------------------------------------------------------------------------
// .html is replace
// .text changes text
// .append adds to DOM
