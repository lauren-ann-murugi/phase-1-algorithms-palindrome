function isPalindrome(word) {
  // Reverse the word and compare it to the original
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
  Pseudocode:
  1. Take the word and split it into an array of characters.
  2. Reverse the array.
  3. Join the array back into a string.
  4. Compare the reversed string to the original word.
  5. If they're the same, return true (it's a palindrome).
     Otherwise, return false.
*/

/*
  Explanation:
  A palindrome is a word that reads the same forwards and backwards.
  So, to check if a word is a palindrome:
  - We reverse the word using `split`, `reverse`, and `join`.
  - Then we compare it to the original.
  - If both strings match, it's a palindrome!
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a")); // Single letter is always a palindrome

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("cat"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));
}

module.exports = isPalindrome;
