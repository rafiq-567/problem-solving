// 1
// console.log('hello world')

// 2
// function addTwo(a, b) {
//     return a + b
// }
// console.log(addTwo(2,5))

// 3
// function evenOdd(){
//     for(let i = 1; i<=100; i++)
//         if(i%2===0){
//             return "even"
//         }else{
//             return "odd"
//         }
// }

// 4
// function largestOfThree(a, b, c) {
//     if (a >= b && a >= c){
//         return a
//     }else if(b>=a&&b>=c){
//         return b
//     }else{
//         return c
//     }
// }

// const largest = Math.max(10, 25, 66)
// console.log(largest)


// 5
// for (i=1; i <=10; i++){
//     console.log(i)
// }

// 6
// function calculate(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return b !== 0 ? a / b : "Cannot divide by zero";
//         default:
//             return "Invalid operator";
//     }
// }


// console.log(calculate(10, 5, '+')); 
// console.log(calculate(10, 5, '-'));
// console.log(calculate(10, 5, '*'));
// console.log(calculate(10, 5, '/'));

// 7
function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

const boilingPointC = 100;
const boilingPointF = convertToFahrenheit(boilingPointC);
console.log(`${boilingPointC}°C is equal to ${boilingPointF}°F`);
console.log(`${boilingPointC}°C is equal to ${boilingPointF}°F`);
console.log(convertToFahrenheit(25));