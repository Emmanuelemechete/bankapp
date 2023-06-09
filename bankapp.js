"use strict";
// script.ts

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.balance = 0;
}
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Successfully deposited $${amount}`);
            this.updateBalance();
            alert(`Successfully deposited $${amount}`);
        }
        else {
            console.log("Invalid amount. Deposit failed.");
            alert("Invalid amount. Deposit failed.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Successfully withdrew $${amount}`);
            this.updateBalance();
            alert(`Successfully withdrew $${amount}`);
        }
        else {
            console.log("Insufficient balance or invalid amount. Withdrawal failed.");
            alert("Insufficient balance or invalid amount. Withdrawal failed.");
        }
    }
    transfer(amount, recipient) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            recipient.balance += amount;
            console.log(`Successfully transferred $${amount} to ${recipient.username}`);
            this.updateBalance();
            recipient.updateBalance();
            alert(`Successfully transferred $${amount} to ${recipient.username}`);
        }
        else {
            console.log("Insufficient balance or invalid amount. Transfer failed.");
            alert("Insufficient balance or invalid amount. Transfer failed.");
        }
    }
    updateBalance() {
        const balanceElement = document.getElementById("balance");
        if (balanceElement) {
            balanceElement.textContent = this.balance.toString();
        }
    }
}

let currentUser = null;
function login() {
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");
    if (usernameInput.value === "1234" && passwordInput.value === "1234") {
        currentUser = new User(usernameInput.value, passwordInput.value);
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("welcomeMessage").textContent = `Your Current Transaction is :Token/OTP, ${currentUser.username} and it only last for this transaction.`;
        document.getElementById("balance").textContent = currentUser.balance.toString();
    }
    else {
        alert("Invalid username or password");
    }
    usernameInput.value = "";
    passwordInput.value = "";
    
}


function deposit() {
    const depositInput = document.getElementById("depositInput");
    const amount2 = parseFloat(depositInput.value);
    if (!isNaN(amount2) && currentUser) {
        currentUser.deposit(amount2);
        depositInput.value = "";
    }
    else {
        alert("Invalid amount. Deposit failed.");
    }
}
function transfer() {
    const recipientInput = document.getElementById("recipientInput");
    const transferInput = document.getElementById("transferInput");
    const amount2 = parseFloat(transferInput.value);
    if (!isNaN(amount2) && currentUser) {
        const recipientUsername = recipientInput.value;
        if (recipientUsername && recipientUsername !== currentUser.username) {
            const recipient = new User(recipientUsername, "");
            currentUser.transfer(amount2, recipient);
            recipientInput.value = "";
            transferInput.value = "";
        }
        else {
            console.log("Invalid recipient username");
            alert("Invalid recipient username");
        }
    }
    else {
        alert("Invalid amount or user. Transfer failed.");
    }
} 
function withdraw() {
    const withdrawInput = document.getElementById("withdrawInput");
    const amount2 = parseFloat(withdrawInput.value);
    if (!isNaN(amount2) && currentUser) {
        currentUser.withdraw(amount2);
        withdrawInput.value = "";
    }
    else {
        alert("Invalid amount. Withdrawal failed.");
    }
}
