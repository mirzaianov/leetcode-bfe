var reversePrefix = function (word, ch) {
  let flexString = word.slice(0, word.indexOf(ch) + 1);
  let reversedString = [...flexString].reverse().join('');
  let fixedString = word.slice(word.indexOf(ch) + 1);

  return reversedString + fixedString;
};

console.log(reversePrefix('abcdefd', 'd')); // "dcbaefd"
console.log(reversePrefix('xyxzxe', 'z')); // "zxyxxe"
console.log(reversePrefix('abcd', 'z')); // "abcd"
