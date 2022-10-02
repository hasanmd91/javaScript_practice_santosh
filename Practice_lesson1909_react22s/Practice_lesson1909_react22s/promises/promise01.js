'use strict';

// Sample usage - do not modify
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

/**
Run the code by adding a comment at the end of the file (code changes will re-run the code) and take a look at the output.
Your code is running top to bottom, however, some code might be scheduled into the future. That's the case with the .then(callback).
Feel free to play around with the code and see how that affects the result.
For example, try increasing the 1000 milliseconds to 2000....*/

/**
 * @param {number[]} grades
 */
 console.log("A");
 wait(1000).then(() => {
     // this runs when the wait(milliseconds) function has completed successfully
     console.log("B");
 })
 console.log("C");
