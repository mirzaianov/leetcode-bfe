var freqAlphabets = function (s) {
  const store = 'abcdefghijklmnopqrstuvwxyz'.split('');

  let i = 0;
  let result = '';

  while (s[i]) {
    if (s[i + 2] === '#') {
      result += store[`${s[i]}${s[i + 1]}` - 1];
      i += 3;
    } else {
      result += store[`${s[i]}` - 1];
      i++;
    }
  }

  return result;
};

console.log(freqAlphabets('10#11#12')); // "jkab"
console.log(freqAlphabets('1326#')); // "acz"
