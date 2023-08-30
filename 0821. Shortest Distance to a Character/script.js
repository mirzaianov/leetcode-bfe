var shortestToChar = function (s, c) {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) arr.push(i);
  }

  const res = [];

  for (let i = 0; i < s.length; i++) {
    const subArr = [];

    for (let j = 0; j < arr.length; j++) {
      subArr.push(Math.abs(arr[j] - i));
    }

    res.push(Math.min(...subArr));
  }

  return res;
};

console.log(shortestToChar('loveleetcode', 'e')); // [3,2,1,0,1,0,0,1,2,2,1,0]
console.log(shortestToChar('aaab', 'b')); // [3,2,1,0]
