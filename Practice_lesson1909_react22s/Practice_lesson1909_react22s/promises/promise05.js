'use strict';
// Sample usage (do not modify)
const wait = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

/**
Run the code and take a look at the output.
Visualize the promise state at every step (using your browser's dev tools console). Make sure you understand
why the last line logs pending rather than fulfilled....*/

const waitPromise = wait(1000);
console.log(waitPromise); // pending at this stage

waitPromise.then(() => {
    console.log("waited 1 second");
    console.log(waitPromise); // fulfilled at this stage
});

console.log(waitPromise); // pending at this stage
