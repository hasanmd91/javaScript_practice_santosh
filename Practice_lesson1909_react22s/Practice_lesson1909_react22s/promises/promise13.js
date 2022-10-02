'use strict';

/**
Implement a function wait(milliseconds) that returns a promise and fulfills after milliseconds have elapsed.
Look at the sample usage to see how the function is being used.*/

const waitOneSecond = () => {
    return new Promise(resolve => {
        setTimeout(() => {
        }, 1000);
    });
}


// Sample usage - do not modify
waitOneSecond().then(() => {
    console.log("Done waiting.");
});
