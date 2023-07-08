var evenOddBit = function (n) {
  let even = 0;
  let odd = 0;
  let i = 0;

  while (n > 0) {
    if (n & 1) {
      if (i % 2 === 0) even++;
      else odd++;
    }

    i++;
    n >>= 1;
  }

  return [even, odd];
};

console.log(evenOddBit(17)); // [2,0]
console.log(evenOddBit(2)); // [0,1]
