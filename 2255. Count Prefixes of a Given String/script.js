var countPrefixes = function (words, s) {
  return words.filter(item => s.startsWith(item)).length;
};

console.log(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc')); // 3
console.log(countPrefixes(['a', 'a'], 'aa')); // 2
