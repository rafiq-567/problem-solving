// p-41
function capitalizeWords(sentence) {
  const words = sentence.split(' ');
  const capitalizedArray = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

    capitalizedArray.push(capitalizedWord);
  }

  return capitalizedArray.join(' ');
}

console.log(capitalizeWords("hello world from javascript")); 
