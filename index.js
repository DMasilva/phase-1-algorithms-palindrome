function isPalindrome(word) {
 // Write your algorithm here
return word.split("").reverse().join("") === word
}
/* 
  Add your pseudocode here
*/
// split the input 
// check if is same backward and forward
// return trueelse return false

/*
  Add written explanation of your solution here
  
*/

// You can run `node index.js` to view these console logs
 if (require.main === module) {
//   // add your own custom tests in here
  console.log("Expecting: true");
 console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

 module.exports = isPalindrome
