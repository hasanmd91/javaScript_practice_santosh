'use strict';

/**
The function waitForCompleteClick  will complete when the user (you) click on the Complete button in the browser tab.
Update the code in  waitForCompleteClick such that the console.log("Complete clicked"); runs after you click on the complete button.
Unlike the wait() function, this function does not take any parameters.....*/

// Sample usage (do not modify)
const waitForCompleteClick = () => {
  return new Promise((resolve) => {
    document.querySelector('#complete-btn').addEventListener('click', () => {
      resolve();
    });
  });
};

// Update here...
console.log('Complete clicked');
