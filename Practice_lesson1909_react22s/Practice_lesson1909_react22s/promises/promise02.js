'use strict';

// Sample usage - do not modify
const randomWait = () => {
    return new Promise(resolve => {
        const min = 1;
        const max = 4;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`waiting ${rand} second${rand > 1 ? 's' : ''}`);
        setTimeout(() => {
            resolve();
        }, rand * 1000);
    });
}

/**
The function randomWait waits between 1 and 4 seconds (it chooses a random value every time).
Run the code and take a look at the output.
Your code is running top to bottom, however, some code might be scheduled into the future. That's the case with the .then(callback).
Feel free to play around with the code and see how that affects the result. For example, try increasing the 1000 milliseconds to 2000.*/

/**
 * @param {number[]} grades
 */

 console.log("A");
 randomWait().then(() => {
     // this runs when the randomWait() function has completed successfully
     console.log("B");
 })
 console.log("C");
