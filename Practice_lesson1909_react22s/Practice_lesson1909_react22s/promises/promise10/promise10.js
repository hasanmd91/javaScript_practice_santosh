
// Sample usage (do not modify)
const waitForCompleteClick = () => {
    return new Promise((resolve, reject) => {
        document.querySelector("#complete-btn").addEventListener("click", () => {
            resolve();
        });
        document.querySelector("#fail-btn").addEventListener("click", () => {
            reject();
        });
    });
}

/* Update the code in index.js such that the console.log("Complete clicked"); runs after you click on the complete button and console.error("Fail clicked") runs after you click on the fail button.
Unlike the wait() function, this function does not take any parameters.*/
console.log("Complete clicked");
console.error("Fail clicked");
