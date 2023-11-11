var splitWordsBySeparator = function (words, separator) {
  const res = [];

  while (words.length) {
    let word = words.shift().split(separator);

    res.push(...word);
  }

  return res.filter(item => item.length > 0);
};

console.log(splitWordsBySeparator(['one.two.three', 'four.five', 'six'], '.')); // ["one","two","three","four","five","six"]
console.log(splitWordsBySeparator(['$easy$', '$problem$'], '$')); // ["easy","problem"]
console.log(splitWordsBySeparator(['|||'], '|')); // []
