var finalPrices = function (prices) {
  let res = [];

  while (prices.length) {
    let curr = prices[0];

    prices.shift();

    let low = prices.find(a => a <= curr);

    res.push(low ? curr - low : curr);
  }

  return res;
};

console.log(finalPrices([8, 4, 6, 2, 3])); // [4, 2, 4, 2, 3]
console.log(finalPrices([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(finalPrices([10, 1, 1, 6])); // [9, 0, 1, 6]
