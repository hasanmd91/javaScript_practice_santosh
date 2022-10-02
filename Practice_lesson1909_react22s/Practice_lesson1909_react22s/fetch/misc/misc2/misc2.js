'use strict';

/**
Every time you click on the Start game button, it is currently calling the startGame() and logAnalytics() functions.
Update the event listener such that it only calls the startGame() once, but keeps calling logAnalytics() every time.
**/

const button = document.querySelector("#app-button");
button.addEventListener("click", () => {
    startGame();
    logAnalytics();
});


// do not modify
function startGame() {
    console.log("game started!");
}

// do not modify
function logAnalytics() {
    console.log("log analytics");
}
