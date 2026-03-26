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
function findMissing(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}


const arr = [1, 2, 4, 5];
const n = 5;

console.log(findMissing(arr, n));