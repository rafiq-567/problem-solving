// p-31

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// const arr = [1, 2, 2, 3, 4, 4, 5];

// console.log(removeDuplicates(arr));

// p-32
function isSorted(arr) {
  const asc = arr.every((val, i) => i === 0 || arr[i - 1] <= val);
  const desc = arr.every((val, i) => i === 0 || arr[i - 1] >= val);

  return asc || desc;
}
const arr = [ 1, 2, 3, 4, 2];
console.log(isSorted(arr));    