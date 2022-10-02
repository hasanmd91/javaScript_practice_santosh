'use strict';

/**
Complete the fakeFetch(endpoint) function such that:

When the endpoint is "flight-status", it should return a promise that resolves successfully after 1 second with the following object
{
/*  departed: false
    delayed: true
}*/
/* For all other endpoints, it should return a promise that fails. You can also pass an error message such as: "endpoint not supported.".
*/

const fakeFetch = endpoint => {
    // TODO: implement fake fetch

}

// Sample usage - do not modify
fakeFetch("flight-status")
  .then((data) => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

fakeFetch("user-details")
  .then((data) => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
