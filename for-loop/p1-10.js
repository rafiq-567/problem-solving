// problem-1
// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// Problem-2
// for (let i=10; i >=1; i--) {
//     console.log(i)
// }

//problem-3
// for (let i=1; i <=50; i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }

//problem-4
// for (let i=1; i<=50; i++){
//     if(i%2==1){
//         console.log(i)
//     }
// }

//problem-5
// function sumToN(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++){
//         sum = sum+i;
//     }
//     return sum
// }
// console.log(sumToN(5))

//problem-6
// function printTable(n) {
//     for (let i = 1; i <= 10; i++) {
// console.log(n + " x " + i + " = " + (n * i));
//     }
// }
// printTable(2)

//problem-7
// let count = 0;
// for(i = 1; i <=100; i++){
    
//     if(i%3==0){
//          count++;
//     }
// }
// console.log(count)

// problem-8
//  for(let i = 1; i <=10; i++){
//         console.log(i + " squared = " + (i * i))
//     }


// problem-9
let n = 4;

for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    console.log(spaces + hashes);
}