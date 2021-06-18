/* Welcome the user to the password validator tool

Prompt the user for a password to validate

Check if the user’s password meets the following constraint:

At least 10 characters long

Must contain one of the following *&$!^

If the user’s password meets the constraint, show a success message to the user

If the user’s password fails the constraint, show a failure message to the user */

console.log("Welcome, User!");

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter your password.", function (answer) {
  const regex = /[*&$!^]/g;
  if (answer.length > 10 && regex.test(answer) === true) {
    console.log("Great job! This is valid.");
  } else {
    console.log("Not valid... please try again.");
  }
  reader.close();
});
