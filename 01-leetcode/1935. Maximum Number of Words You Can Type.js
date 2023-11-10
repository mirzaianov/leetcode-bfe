var canBeTypedWords = function (text, brokenLetters) {
  const arr = text.split(" ");
  let count = 0;

  for (let word of arr) {
    for (let letter of brokenLetters) {
      if (word.includes(letter)) {
        count++;
        break;
      }
    }
  }

  return arr.length - count;
};

console.log(canBeTypedWords("hello world", "ad")); // 1
console.log(canBeTypedWords("leet code", "lt")); // 1
console.log(canBeTypedWords("leet code", "e")); // 0
