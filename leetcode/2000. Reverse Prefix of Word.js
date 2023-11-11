// var reversePrefix = function (word, ch) {
//   let flexString = word.slice(0, word.indexOf(ch) + 1);
//   let reversedString = [...flexString].reverse().join('');
//   let fixedString = word.slice(word.indexOf(ch) + 1);

//   return reversedString + fixedString;
// };

// #2

var reversePrefix = function (word, ch) {
  let start = 0;
  let end = word.indexOf(ch);
  const arr = word.split('');

  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];

    start++;
    end--;
  }

  return arr.join('');
};

console.log(reversePrefix('abcdefd', 'd')); // "dcbaefd"
console.log(reversePrefix('xyxzxe', 'z')); // "zxyxxe"
console.log(reversePrefix('abcd', 'z')); // "abcd"
