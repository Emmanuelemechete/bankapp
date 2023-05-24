// This function is called when the form is submitted.
function submitForm() {
    // Get the values from the form.
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var accountType = document.getElementById("accounttype").value;
    var initialDeposit = document.getElementById("initialdeposit").value;
  
    // Validate the form data.
    if (fname === "" || lname === "" || email === "" || password === "" || confirmPassword === "" || accountType === "" || initialDeposit === "") {
      alert("Please enter all required fields.");
      return;
    }
  
    // Check if the passwords match.
    if (password !== confirmPassword) {
      alert("The passwords do not match.");
      return;
    }
  
    // Create a new account object.
    var account = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      accountType: accountType,
      initialDeposit: initialDeposit
    };
  
    // Send the account object to the server.
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/create-account", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(account));
  
    // Handle the response from the server.
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert("Account created successfully!");
        window.location.href = "/accounts";
      } else {
        alert("Error creating account: " + xhr.status);
      }
    };
  }
  
  // When the form is submitted, call the submitForm() function.
  document.getElementById("createAccount").addEventListener("click", submitForm);
  