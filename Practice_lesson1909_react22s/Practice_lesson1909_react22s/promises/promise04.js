'use strict';

// Sample usage (do not modify)
const fakeFetch = () => {
    return new Promise(resolve => {
        const min = 1;
        const max = 3;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        setTimeout(() => {
            resolve();
        }, rand * 1000);
    });
}

/**
 Call this fakeFetch function inside the init function and then move the console.log("Fake fetch completed")
 such that it runs once fakeFetch has completed...*/

 const init = () => {
     console.log("Fake fetch completed");
 }

 // Sample usage (do not modify)
 init();
