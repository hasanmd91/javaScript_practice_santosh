"use strict";

/**
Complete the function removeFirstApp such that it removes the first element of the apps array it receives and returns the new array (which should not contain the item that was removed).

/**
 * @param {array} apps
 */
const removeFirstApp = (apps) => {
  apps.splice(2);
  return apps;
};

// Sample usage - do not modify
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
console.log(removeFirstApp(apps)); // ["Whatsapp", "Chrome", "Firefox"]
