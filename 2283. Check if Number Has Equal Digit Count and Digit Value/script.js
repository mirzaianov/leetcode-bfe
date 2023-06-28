var digitCount = function (num) {
  const store = {};

  for (let digit of num) {
    store[digit] = store[digit] + 1 || 1;
  }

  for (let i = 0; i < num.length; i++) {
    if (store[i] === +num[i]) continue;
    else if (store[i] === undefined && +num[i] === 0) continue;

    return false;
  }

  return true;
};

console.log(digitCount("1210")); // true
console.log(digitCount("030")); // false
