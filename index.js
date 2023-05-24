//function checkAccountNumber() {
    /* Get the input value
    var accountNumber = document.getElementById("account-number").value;
    
    // Check if the input value is not empty and consists only of numbers
    if (accountNumber && /^\d+$/.test(accountNumber)) {
      // If the input is valid, redirect to "transferpage.html"
      window.location.href = "transferpage.html";
    } else {
      // If the input is invalid, show an error message
      alert("Please enter a valid account number.");
    }
  }
  */
/*
  // Get the login form and submit button
var loginForm = document.getElementById("login-form");
var loginBtn = document.getElementById("login-btn");

// Add an event listener to the submit button
loginBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form from submitting
  checkAccountNumber(); // Call the function to check the account number
});

function checkAccountNumber() {
  // Get the input value
  var accountNumber = document.getElementById("account-number").value;
  
  // Check if the input value is not empty and consists only of numbers
  if (accountNumber && /^\d+$/.test(accountNumber)) {
    // If the input is valid, redirect to "transferpage.html"
    window.location.href = "transferpage.html";
  } else {
    // If the input is invalid, show an error message
    alert("Please enter a valid account number.");
  }
}
*/

// Get the login form and submit button
const loginForm = document.getElementById("login-form");
const loginBtn = document.getElementById("login-btn");


// Add an event listener to the submit button
loginBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form from submitting
  checkLogin(); // Call the function to check the login credentials
});

function checkLogin() {
  // Get the input values
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Check if the username and password are correct
  if (username === "admin" && password === "1234") {
    // If the login is correct, redirect to "welcome.html"
    window.location.href = "transferpage.html";
  } else {
    // If the login is incorrect, show an error message
    alert("Incorrect username or password.");
  }
}

