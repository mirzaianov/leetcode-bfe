var sortByBits = function (arr) {
  return arr.sort((a, b) => bits(a) - bits(b) || a - b);

  function bits(num) {
    let count = 0;

    while (num) {
      count += num & 1;
      num = num >>> 1;
    }

    return count;
  }
};
