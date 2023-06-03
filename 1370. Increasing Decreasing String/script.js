var sortString = function (s) {
  let arr = s.split('').sort();
  let res = '';

  while (arr.length) {
    arr = arr.filter((x, i) => {
      if (i === 0 || x !== res[res.length - 1]) {
        res += x;

        return false;
      }

      return true;
    });

    arr.reverse();
  }

  return res;
};

console.log(sortString('ccccaaaabbbb')); // "abccbaabccba"
console.log(sortString('rat')); // "art"
