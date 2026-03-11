//problem-11
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

//problem-12
// let n = 30;
// let isPrime = true;
// if (n <= 1) {
//     isPrime = false
// } else {
//     for (i = 2; i < n; i++) {
//         if (n % i === 0)
//             isPrime = false
//         break
//     }
// }

// if(isPrime){
//     console.log('prime number')
// }else{
//     console.log('not a prime number')
// }


//problem-13
// let array = [1,5,6,4,5,6,4,8,7,9]
// let uniqueArray = []

// for(let i = 0; i < array.length; i++){
//     if(!uniqueArray.includes(array[i])){
//         uniqueArray.push(array[i])
//     }
// }
// console.log(uniqueArray)

// problem-14
// function factorial(n) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorial(5));

//problem-15
// function countDigits(num) {
//   return num.toString().length;
// }

// console.log(countDigits(12345));


//problem-16
function reverseNumber(num) {
  let reversed = 0;

  while (num !== 0) {
    let digit = num % 10;                 
    reversed = reversed * 10 + digit;     
    num = Math.floor(num / 10);           
  }

  return reversed;
}

console.log(reverseNumber(12345)); 