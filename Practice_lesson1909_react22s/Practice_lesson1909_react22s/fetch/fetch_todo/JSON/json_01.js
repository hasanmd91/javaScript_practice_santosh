'use strict';

/**

Complete the willItRain function such that it returns true when the weather forecast predicts that it'll rain and
false otherwise.

This willItRain function receives a JSON string from a fictive weather API.
/**
 * @param {string} weatherApiResponse
 */
const willItRain = (weatherApiResponse) => {
  // write it here
};

// Sample usage - do not modify
console.log(
  willItRain(
    '{"now":{"temperature":18,"humidity":"30%","uvIndex":0,"rainExpected":true}}'
  )
); // true
console.log(
  willItRain(
    '{"now":{"temperature":25,"humidity":"90%","uvIndex":4,"rainExpected":false}}'
  )
); // false
