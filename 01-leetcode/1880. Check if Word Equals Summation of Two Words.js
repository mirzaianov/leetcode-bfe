var isSumEqual = function (firstWord, secondWord, targetWord) {
  const letters = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
  };

  const count = (string) => {
    return Array.from(string).reduce((acc, letter) => acc + letters[letter], '');
  };

  return +count(firstWord) + +count(secondWord) === +count(targetWord);
};

console.log(isSumEqual('acb', 'cba', 'cdb')); // true
console.log(isSumEqual('aaa', 'a', 'aab')); // false
console.log(isSumEqual('aaa', 'a', 'aaaa')); // true
