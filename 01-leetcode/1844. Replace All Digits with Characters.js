var replaceDigits = function (s) {
  let result = '';
  let i = 0;

  while (s[i]) {
    if (i % 2 === 0) {
      result += s[i];
    } else {
      result += shift(s, i - 1, i);
    }

    i++;
  }

  return result;

  function shift(str, c, x) {
    return String.fromCharCode(str.charCodeAt(c) + +str[x]);
  }
};

console.log(replaceDigits('a1c1e1')); // "abcdef"
console.log(replaceDigits('a1b2c3d4e')); // "abbdcfdhe"
