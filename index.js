function hasTargetSum(array, target) {
  let i = array[0];
  let j = i + 1;
  if (i + j == target) {
    return true
  } else {
    i++
  }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

// 1. Rewrite the Problem in Your Own Words:

// write an algorithm that takes in two arguments: 
// an array of numbers
// a target integer, aka a number that is the desired sum of any two numbers in the array.
// the algorithm returns true if the target integer is achievable by adding any two numbers of the array.

// 2. Write Your Own Test Cases

// hasTargetSum([1, 2, 5, 10, 11], 7)
// returns true

// hasTargetSum([1, 2, 5, 10, 11], 90)
// returns false

// 3. Pseudocode

// ok so inside the function
// define the first indexed number in an array, AKA array[0] lets call it i.
// define a second number, j. j is i + 1
// if i + j = target, return true
// else iterate somehow. so like array[1] + array[2]
// i don't fucking know yet.


// Code
// Make It Clean and Readable
// Optimize