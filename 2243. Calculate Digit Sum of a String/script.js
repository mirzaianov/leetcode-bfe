const digitSum = function (s, k) {
  if (s.length <= k) {
    return s;
  }

  return digitSum(round(s, k), k);

  function round(string, number) {
    const result = [];

    for (let i = 0; i < string.length; i += number) {
      result.push(
        string
          .substr(i, number)
          .split('')
          .reduce((sum, char) => +sum + (+char || 0)),
      );
    }

    return result.join('');
  }
};

console.log(digitSum('11111222223', 3)); // "135"
console.log(digitSum('00000000', 3)); // "000"
