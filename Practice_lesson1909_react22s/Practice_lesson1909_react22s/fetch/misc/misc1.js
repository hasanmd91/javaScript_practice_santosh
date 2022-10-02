'use strict';

/**
There is an old piece of code on StackOverflow that calculates the perimeter of a square.
Start by running the code to visualize hoisting. The first console.log will output undefined.
Then, get rid of the var declarations and feel free to remove unnecessary console logs if they break..
**/

const getSquarePerimeter = (side) => {
  console.log(result);
  var result = 0;
  console.log(result);
  result = side * 4;
  console.log(result);
  return result;
}

// Sample usage - do not modify
console.log(getSquarePerimeter(5)); // 20
console.log(getSquarePerimeter(10)); // 40
