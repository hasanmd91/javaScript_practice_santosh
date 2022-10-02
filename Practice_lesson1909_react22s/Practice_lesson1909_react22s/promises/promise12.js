'use strict';

/**
We're using the same fakeFetch function from the last excercise that takes a string as a parameter. This fake fetch only handles the "flight-status" for now.
However, you may want to use it to get the "user-details".
This will fail at the moment since it's not implemented so make sure to handle the rejected case.
To handle the rejected case, you need to log the error using console.error.
In the future, once we implement user-details, the code will automatically work because the promise will not reject.......*/

const waitOneSecond = () => {
  // write here
};

// Sample usage - do not modify
waitOneSecond().then(() => {
  console.log('Done waiting.');
});
