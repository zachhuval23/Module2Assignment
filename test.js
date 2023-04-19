// DECLARING AND USING VARIABLES

let word = "World!";

console.log("Hello " + word)

// TEMPLATE LITERALS

const name = "Zach"; // backtick example
const age = 26;

console.log(`My name is ${name} and I am ${age} years old.`);

const profName = 'Professor Handley'; // variable example
const greeting = `Hello, ${profName}!`;

console.log(greeting);

// ARITHMETIC OPERATORS

let x = 5;
let y = 10;

let sum = x + y; // sum is now 15

let difference = x - y; // difference is now -5

let product = x * y; // product is now 50

let quotient = y / x; // quotient is now 2

let remainder = y % x; // remainder is now 0

console.log(sum,difference,product,quotient,remainder)

// CONDITIONAL STATEMENTS

let num = 10; // if else statement

if (num > 5) {
  console.log("The number is greater than 5.");
} else {
  console.log("The number is less than or equal to 5.");
}

var day = new Date().getDay(); // switch statement
var dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Today is " + dayName);
