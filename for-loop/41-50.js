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
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9));

// p-46
// function maxSubArray(nums) {
//   let maxSoFar = nums[0];
//   let currentMax = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     currentMax = Math.max(nums[i], currentMax + nums[i]);

//     maxSoFar = Math.max(maxSoFar, currentMax);
//   }

//   return maxSoFar;
// }

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log("Maximum Subarray Sum:", maxSubArray(nums));

// p-47
// function lengthOfLongestSubstring(s) {
//   let maxLength = 0;
//   let left = 0;
//   const charMap = new Map();

//   for (let right = 0; right < s.length; right++) {
//     const char = s[right];

//     if (charMap.has(char) && charMap.get(char) >= left) {
//       left = charMap.get(char) + 1;
//     }

//     charMap.set(char, right);

//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   return maxLength;
// }

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));

// p-48
function moveZeroes(nums) {
  let insertPos = 0;

  // প্রথম লুপ: সব নন-জিরো সংখ্যাগুলোকে সামনের দিকে নিয়ে আসা
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // দ্বিতীয় লুপ: বাকি খালি জায়গাগুলোতে ০ বসিয়ে দেওয়া
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

// Example usage:
const arr = [0, 1, 0, 3, 12];
console.log(moveZeroes(arr)); 
// Output: [1, 3, 12, 0, 0]