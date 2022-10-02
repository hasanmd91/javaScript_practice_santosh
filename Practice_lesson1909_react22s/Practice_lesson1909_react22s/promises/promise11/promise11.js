// Sample usage - do not modify
const loader = document.querySelector("#app-loader");
const startLoader = () => {
   loader.textContent = "Loading...";
}
 const stopLoader = () => {
    loader.textContent = "";
}
const getWeatherDescription = (city) => {
    return new Promise((resolve, reject) => {
        if (!city || typeof city !== "string") {
            reject("City must be a string");
        }
        if (!["helsinki", "tokyo"].includes(city.toLowerCase())) {
            reject("City must be Helsinki or Tokyo");
        }
        // simulate network request
        setTimeout(() => {
            if (city.toLowerCase() === "helsinki") {
                resolve("Cloudy");
            }
            if (city.toLowerCase() === "tokyo") {
                resolve("Sunny");
            }
        }, 1000);
    });
};

/*
The function logWeatherDescription starts a loader and stops it on success and on error.
Update the code getting rid of the stopLoader() duplication (it should only be called once).
*/

/**
 * @param {string} cityName
 */
const logWeatherDescription = cityName => {
    startLoader();
    getWeatherDescription(cityName)
        .then(data => {
            stopLoader();
            console.log(data);
        })
        .catch(error => {
            stopLoader();
            console.error(error);
        });
}


logWeatherDescription("Helsinki"); // will eventually log "Cloudy"
logWeatherDescription("Tokyo"); // will eventually log "Sunny"
logWeatherDescription("Patagonia"); // will eventually fail
