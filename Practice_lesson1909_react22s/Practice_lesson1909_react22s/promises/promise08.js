'use strict';

// Sample usage (do not modify)
const fakeFetch = (endpoint) => {
    return new Promise((resolve, reject) => {
        if (endpoint !== "flight-status") {
            reject("Invalid endpoint. Only flight-status is supported.")
        }
        const min = 1;
        const max = 2;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;

        const dataToResolve = {
            departed: false,
            delayed: true
        };

        setTimeout(() => {
            resolve(dataToResolve);
        }, rand);
    });
}

/**
For now, I've created another fakeFetch function that takes a string as a parameter.
This should be "flight-status" for now. This function returns a promise that resolves
successfully after 1 to 2 seconds (randomly) with the data from the flight status.
Call this fakeFetch function inside the logFlightStatus function and then log the
data that it receives once it has completed......*/

const logFlightStatus = () => {

}

// Sample usage (do not modify)
logFlightStatus();
