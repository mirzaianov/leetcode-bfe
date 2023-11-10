const countPrimeSetBits = function (left, right) {
  let count = 0;

  const isPrime = (n) => {
    if (n === 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i === 0) return false;
    }

    return true;
  };

  for (let i = left; i <= right; i += 1) {
    let num = i;
    let numCount = 0;

    while (num) {
      if (num & 1) numCount += 1;

      num >>= 1;
    }

    if (isPrime(numCount)) {
      count += 1;
    }
  }

  return count;
};

console.log(countPrimeSetBits(6, 10)); // 4
console.log(countPrimeSetBits(10, 15)); // 5
