// =====================
// Beginner Level (1–10)
// =====================
var prompt = require('prompt-sync')();
// 1. Even or Odd
let num = parseInt(prompt("Enter a number:"));
console.log(num % 2 === 0 ? "Even" : "Odd");

// 2. Positive, Negative, or Zero
num = parseInt(prompt("Enter a number:"));
if (num > 0) console.log("Positive");
else if (num < 0) console.log("Negative");
else console.log("Zero");

// 3. Greater of two numbers
let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
console.log(`Greater: ${a > b ? a : b}`);

// 4. Divisible by 3
num = parseInt(prompt("Enter a number:"));
console.log(num % 3 === 0 ? "Divisible by 3" : "Not divisible by 3");

// 5. Multiple of 7
num = parseInt(prompt("Enter a number:"));
console.log(num % 7 === 0 ? "Multiple of 7" : "Not a multiple of 7");

// 6. Vowel or Consonant
let ch = prompt("Enter a lowercase letter:");
console.log("aeiou".includes(ch) ? "Vowel" : "Consonant");

// 7. Between 10 and 50
num = parseInt(prompt("Enter a number:"));
console.log(num >= 10 && num <= 50 ? "Between 10 and 50" : "Not in range");

// 8. 3-digit number
num = parseInt(prompt("Enter a number:"));
console.log((Math.abs(num) >= 100 && Math.abs(num) <= 999) ? "3-digit number" : "Not a 3-digit number");

// 9. Eligible for voting
let age = parseInt(prompt("Enter age:"));
console.log(age >= 18 ? "Eligible for voting" : "Not eligible");

// 10. Temperature
let temp = parseFloat(prompt("Enter temperature:"));
if (temp > 30) console.log("Hot");
else if (temp >= 15) console.log("Moderate");
else console.log("Cold");

// ===========================
// Intermediate Level (11–20)
// ===========================

// 11. Greatest of 3 numbers
a = parseInt(prompt("Enter first number:"));
b = parseInt(prompt("Enter second number:"));
let c = parseInt(prompt("Enter third number:"));
console.log(`Greatest: ${Math.max(a, b, c)}`);

// 12. Leap year
let year = parseInt(prompt("Enter a year:"));
if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) console.log("Leap year");
else console.log("Not a leap year");

// 13. Character type
ch = prompt("Enter a character:");
if (/[A-Z]/.test(ch)) console.log("Uppercase");
else if (/[a-z]/.test(ch)) console.log("Lowercase");
else if (/[0-9]/.test(ch)) console.log("Digit");
else console.log("Special character");

// 14. Student grade
let marks = parseInt(prompt("Enter marks (out of 100):"));
if (marks >= 90) console.log("Grade A");
else if (marks >= 75) console.log("Grade B");
else if (marks >= 60) console.log("Grade C");
else if (marks >= 40) console.log("Grade D");
else console.log("Grade F");

// 15. Day of week
let day = parseInt(prompt("Enter day number (1–7):"));
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
console.log(days[day-1] || "Invalid");

// 16. Divisible by 5 and 11
num = parseInt(prompt("Enter a number:"));
console.log(num % 5 === 0 && num % 11 === 0 ? "Divisible by both 5 and 11" : "Not divisible");

// 17. Prime number
num = parseInt(prompt("Enter a number:"));
let isPrime = num > 1;
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false; break;
  }
}
console.log(isPrime ? "Prime number" : "Not a prime number");

// 18. Driving license eligibility
let name = prompt("Enter name:");
age = parseInt(prompt("Enter age:"));
console.log(age >= 18 ? `${name} is eligible` : `${name} is not eligible`);

// 19. Equal or greater
a = parseInt(prompt("Enter first number:"));
b = parseInt(prompt("Enter second number:"));
if (a === b) console.log("Equal");
else console.log(`${a > b ? "First" : "Second"} number is greater`);

// 20. Even/Odd and Positive/Negative
num = parseInt(prompt("Enter a number:"));
console.log(num % 2 === 0 ? "Even" : "Odd");
console.log(num >= 0 ? "Positive" : "Negative");

// =======================
// Advanced Level (21–30)
// =======================

// 21. Average of 5 subjects
let total = 0;
for (let i = 1; i <= 5; i++) {
  total += parseInt(prompt(`Enter marks for subject ${i}:`));
}
let avg = total / 5;
console.log(`Average: ${avg}`);
if (avg >= 90) console.log("Grade A");
else if (avg >= 75) console.log("Grade B");
else if (avg >= 60) console.log("Grade C");
else if (avg >= 40) console.log("Grade D");
else console.log("Grade F");

// 22. Divisible by 3 or 5 but not both
num = parseInt(prompt("Enter a number:"));
console.log((num % 3 === 0) ^ (num % 5 === 0) ? "Condition satisfied" : "Condition not satisfied");

// 23. Palindrome number
num = prompt("Enter a number:");
console.log(num === num.split("").reverse().join("") ? "Palindrome" : "Not palindrome");

// 24. Sum of digits even or odd
num = prompt("Enter a number:");
let sumDigits = num.split("").reduce((sum, d) => sum + (isNaN(parseInt(d)) ? 0 : parseInt(d)), 0);
console.log(`Sum: ${sumDigits} - ${sumDigits % 2 === 0 ? "Even" : "Odd"}`);

// 25. Overtime pay
let hours = parseFloat(prompt("Enter hours worked:"));
console.log(hours > 40 ? `Overtime pay: Rs.${(hours-40)*12}` : "No overtime pay");

// 26. Net salary
let basic = parseFloat(prompt("Enter basic salary:"));
let hra, da;
if (basic < 10000) {
  hra = 0.2 * basic;
  da = 0.5 * basic;
} else {
  hra = 0.3 * basic;
  da = 0.8 * basic;
}
console.log(`Net salary: Rs.${basic + hra + da}`);

// 27. Days in month
month = parseInt(prompt("Enter month number (1–12):"));
if (month === 2) console.log("28 or 29 days");
else if ([4,6,9,11].includes(month)) console.log("30 days");
else if (month >=1 && month <=12) console.log("31 days");
else console.log("Invalid month");

// 28. Strong password
let password = prompt("Enter a password:");
let hasDigit = /\d/.test(password);
let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
console.log(password.length >= 8 && hasDigit && hasSpecial ? "Strong password" : "Weak password");

// 29. Triangle type
let s1 = parseFloat(prompt("Enter side 1:"));
let s2 = parseFloat(prompt("Enter side 2:"));
let s3 = parseFloat(prompt("Enter side 3:"));
if (s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1) {
  if (s1 === s2 && s2 === s3) console.log("Equilateral");
  else if (s1 === s2 || s2 === s3 || s1 === s3) console.log("Isosceles");
  else console.log("Scalene");
} else {
  console.log("Invalid triangle");
}

// 30. Mini login system
let storedUser = "admin";
let storedPass = "pass123";
let user = prompt("Enter username:");
let pass = prompt("Enter password:");
console.log(user === storedUser && pass === storedPass ? "Login successful" : "Invalid credentials");
