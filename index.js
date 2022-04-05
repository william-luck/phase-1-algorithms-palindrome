function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  if (reversedWord === word) {
    return true
  } else {
    return false
  }
}

// let reversedWord = isPalindrome('racecar')
// console.log('Expecting: racecar')
// console.log(reversedWord)

// reversedWord = isPalindrome('coffee')
// console.log('Expecting: eeffoc')
// console.log(reversedWord)

/* 

Pseudocode goes here: 

 Takes in a string, then checks the length.
  Index 0 to index string.length
  Index 1 to index string.length-1
  Dont' really know how to do this 

Iterate though array backwards?
  Populate new array with each letter, then convert that array to string. 
  Check if new string and original string match.

  There are some built-in methods to use for this, but have to use all three
    split(): splits a string into an array of substrings using a seperator
    reverse(): Reverses the order the elemnets in an array. 
    join(): Jions all elemnts of an array inot a string, returns the new string. 

*/

/*
  Add written explanation of your solution here: 
  
  Functions take in a string. 
  The funciton first splits the string into an array
  Then reverses that array
  Then joins that array back into a string. 

  The function then tests if the new string is equal to the original string 
  Will return true if it does equal, and will return false otherwise. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
