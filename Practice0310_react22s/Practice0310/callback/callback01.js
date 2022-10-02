/*
* Update the sayHello function such that the console.log("Done") runs after
* the welcomeUser function has finished executing.
* Note the welcomeUser function accepts a sucess callback as second parameter
*/

const welcomeUser = (name, callback) => {
  setTimeout(() => {
      console.log(`Welcome ${name}`);
      if (callback) {
          callback(); // call the success callback
      }
  }, 1000);
}


/**
 * @param {string} name
 */
 const sayHello = (name) => {
  console.log("Done");
}

sayHello("James");