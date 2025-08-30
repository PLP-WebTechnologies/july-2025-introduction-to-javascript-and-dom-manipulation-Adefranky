// ==============================
// Part 1: Mastering JavaScript Basics
// ==============================

// Variables & conditionals
let userName = prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));

let greetingMsg = "";
if (userAge >= 18) {
  greetingMsg = `Hello ${userName}, you are an adult.`;
} else {
  greetingMsg = `Hi ${userName}, you are still young!`;
}

// Output result to webpage
document.getElementById("greeting").textContent = greetingMsg;


// ==============================
// Part 2: JavaScript Functions
// ==============================

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

// Function 2: Format a string (capitalize first letter)
function formatString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Use the functions
let total = calculateTotal(100, 0.16); // e.g., 16% tax
document.getElementById("calcResult").textContent = 
  `Total price (with tax): $${total}`;

let formatted = formatString("javascript IS awesome!");
document.getElementById("formatResult").textContent = 
  `Formatted text: ${formatted}`;


// ==============================
// Part 3: JavaScript Loops
// ==============================

// Example 1: Loop through array
let fruits = ["apple", "banana", "cherry", "mango"];
let loopList = document.getElementById("loopList");

for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  loopList.appendChild(li);
}

// Example 2: Countdown with while loop
let count = 5;
let countdownText = "";
while (count > 0) {
  countdownText += count + " ";
  count--;
}
document.getElementById("countdown").textContent = 
  "Countdown: " + countdownText;


// ==============================
// Part 4: Mastering the DOM
// ==============================

// 1. Toggle visibility of a message
let toggleBtn = document.getElementById("toggleBtn");
let toggleMsg = document.getElementById("toggleMsg");

toggleBtn.addEventListener("click", function() {
  toggleMsg.classList.toggle("hidden");
});

// 2. Change background color on button click
let colorBtn = document.getElementById("changeColorBtn");
colorBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = 
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// 3. Add new items dynamically to a list
let addItemBtn = document.getElementById("addItemBtn");
let dynamicList = document.getElementById("dynamicList");

let itemCount = 1;
addItemBtn.addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "Dynamic Item " + itemCount;
  dynamicList.appendChild(li);
  itemCount++;
});
