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
function sumDigitsInString(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= '0' && char <= '9') {
      sum += Number(char);
    }
  }

  return sum;
}

const input = "abc123def45";
console.log("Total Sum:", sumDigitsInString(input));
