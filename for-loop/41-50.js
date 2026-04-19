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
// function areAnagrams(str1, str2) {
//   // If lengths differ, they cannot be anagrams
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const charMap = {};

//   for (let i = 0; i < str1.length; i++) {
//     const char = str1[i];
//     charMap[char] = (charMap[char] || 0) + 1;
//   }

//   for (let i = 0; i < str2.length; i++) {
//     const char = str2[i];

//     if (!charMap[char]) {
//       return false;
//     }
    
//     charMap[char]--;
//   }

//   return true;
// }

// console.log(areAnagrams("listen", "silent"));
// console.log(areAnagrams("hello", "world"));

// p-44
// function findFirstRepeatingIndex(arr) {
//   const seen = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (seen.has(element)) {
//       return i;
//     }

//     seen.add(element);
//   }

//   return -1;
// }

// const numbers = [10, 5, 3, 4, 3, 5, 6];
// const result = findFirstRepeatingIndex(numbers);

// console.log("Index of first repeating element:", result);

// p-45
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // Start j at i + 1 so we don't pick the same element twice
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // Return empty if no pair is found
}

// Example:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]