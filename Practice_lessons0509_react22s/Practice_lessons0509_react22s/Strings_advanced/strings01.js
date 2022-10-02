"use strict";

/**
Complete the function getMessage such that it returns the message it receives as a parameter.
The message should always end with a full stop (.).
/**
 * @param {string} message
 */
const getMessage = (message) => {
  return message.endsWith(".") ? message : message + ".";
};

// Sample usage - do not modify
console.log(getMessage("Hello world")); // "Hello world."
console.log(getMessage("Welcome home.")); // "Welcome home."
console.log(getMessage("It works")); // "It works."
console.log(getMessage("Yes. Correct")); // "Yes. Correct."

let text = " jabdjh mkl k dm lk  ";

console.log(text.trim().replace(/\s/g, ""));
