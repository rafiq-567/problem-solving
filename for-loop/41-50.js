// // p-41
// function capitalizeWords(sentence) {
//   const words = sentence.split(' ');
//   const capitalizedArray = [];

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];

//     let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

//     capitalizedArray.push(capitalizedWord);
//   }

//   return capitalizedArray.join(' ');
// }

// console.log(capitalizeWords("hello world from javascript")); 

// p-42
// function sumDigitsInString(str) {
//   let sum = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (char >= '0' && char <= '9') {
//       sum += Number(char);
//     }
//   }

//   return sum;
// }

// const input = "abc123def45";
// console.log("Total Sum:", sumDigitsInString(input));


// p-43
function areAnagrams(str1, str2) {
  // If lengths differ, they cannot be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  const charMap = {};

  // First Loop: Count characters in the first string
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    charMap[char] = (charMap[char] || 0) + 1;
  }

  // Second Loop: Subtract counts based on the second string
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];

    // If the character doesn't exist in map or count is 0, it's not an anagram
    if (!charMap[char]) {
      return false;
    }
    
    charMap[char]--;
  }

  return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false