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
function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum = sum+i;
    }
    return sum
}
console.log(sumToN(5))

