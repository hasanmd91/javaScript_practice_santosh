'use strict';

/*
Complete the checkForNewNotifications function such that it makes a fetch request to https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/notifications.json  
and return its result. Also, visualize that the result of fetch is a Promise. You should see Promise in the console.
*/

class FetchWrapper {
  //TODO
}


// Sample usage - do not modify
/* normally, we don't use try/catch with fetch.
 * This is only for this challenge to allow you to
 * work on the tests one by one. */
try {
    const API = new FetchWrapper("https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app");

    API.get("/notifications.json").then(data => {
        console.log(data);
    });
} catch(error) {}
