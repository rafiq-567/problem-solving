// p-31

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// const arr = [1, 2, 2, 3, 4, 4, 5];

// console.log(removeDuplicates(arr));

// p-32
// function isSorted(arr) {
//   const asc = arr.every((val, i) => i === 0 || arr[i - 1] <= val);
//   const desc = arr.every((val, i) => i === 0 || arr[i - 1] >= val);

//   return asc || desc;
// }
// const arr = [ 1, 2, 3, 4, 2];
// console.log(isSorted(arr));    

// p-33
// function findMin(arr){
//   let min=arr[0]
//   for (let i = 1; i<arr.length; i++){
//     if(arr[i]<min){
//       min =arr[i]
//     }
//   }
//   return min
// }
// const numbers = [5, 2, 9, 1, 7]
// console.log(findMin(numbers))

// p-34
// const string = (str)=>{
//   const reverse = str.split("").reverse().join("");
//   return reverse===str
// }
// const result = string("madam")
// console.log(result)

// p-35
// function findMissing(arr, n) {
//     let expectedSum = (n * (n + 1)) / 2;
//     let actualSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         actualSum += arr[i];
//     }

//     return expectedSum - actualSum;
// }


// const arr = [1, 2, 4, 5];
// const n = 5;

// console.log(findMissing(arr, n));

// p-36
// function intersection(arr1, arr2) {
//     const result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 if (!result.includes(arr1[i])) {
//                     result.push(arr1[i]);
//                 }
//             }
//         }
//     }

//     return result;
// }

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// console.log(intersection(arr1, arr2));

// p-37
// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Hello World"));

// p-38
function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);

    let left = 1;
    for (let i = 0; i < n; i++) {
        result[i] = left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));