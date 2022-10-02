class NameVariations {
  /** @param {string} name */
  constructor(name) {
    this.name = name;
  }

  getNumberOfChars() {
    return this.name.length;
  }

  getLower() {
    return this.name.toLowerCase();
  }

  getUpper() {
    return this.name.toUpperCase();
  }
}

//Sample usage do not modify (but feel free to read)
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
  let nameVariations = new NameVariations(name.value);

  // the try/catch statements are added to allow you and test
  // your code even before you have implemented all the instance methods
  try {
    answer1.textContent = nameVariations.getNumberOfChars();
  } catch (error) {
    console.log(error);
  }

  try {
    answer2.textContent = nameVariations.getLower();
  } catch (error) {
    console.log(error);
  }

  try {
    answer3.textContent = nameVariations.getUpper();
  } catch (error) {
    console.log(error);
  }
});
