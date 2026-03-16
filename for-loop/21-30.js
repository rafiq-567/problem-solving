// p-21
// for (let i = 65; i <= 90; i++) {
//   console.log(String.fromCharCode(i) + " : " + i);
// }

// p-22
// let n = 5;
// let result = "";

// for (let i = 1; i <= n; i++) {
//   result += "*";
// }

// console.log(result);

// p-23
// for (let i = 1; i <= 20; i++) {
//   if (i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// p-24
// function findMax(arr) {
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }

// const numbers = [10, 5, 8, 20, 15];
// console.log(findMax(numbers))

//p-25
// function findMin(arr) {
//   let min = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   return min;
// }

// const numbers = [5, 2, 9, 1, 7];
// console.log("Minimum:", findMin(numbers));

// p-26
function arraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const numbers = [5, 2, 9, 1, 7];
console.log("Sum:", arraySum(numbers));