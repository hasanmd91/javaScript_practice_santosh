/*
* 
* Update the calculateSum function such that the 
* console.log("The sum is: X") runs after 
* the sumGrades function has finished executing.

* Also, replace X with the actual sum of the grades.
*
*/

const sumGrades = (grades, callback) => {
  setTimeout(() => {
      const sum = grades.reduce((total, current) => total + current, 0);
      if (callback) {
          callback(sum); // call the success callback with the sum
      }
  }, 1000);
}

/**
 * @param {number[]} grades
 */
 const calculateSum = (grades) => {
  sumGrades(grades);
  console.log("The sum is: X");

}

// Sample usage - do not modify
calculateSum([18, 10]);
calculateSum([15, 10, 20]);
