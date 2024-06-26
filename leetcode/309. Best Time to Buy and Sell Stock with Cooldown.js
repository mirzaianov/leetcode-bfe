var maxProfit = function (prices) {
  let buy = Infinity;
  let free = 0,
    last = 0,
    now = 0;

  prices.forEach(item => {
    now = Math.max(last, item - buy);
    buy = Math.min(buy, item - free);
    free = last;
    last = now;
  });

  return now;
};

console.log(maxProfit([1, 2, 3, 0, 2])); // 3
console.log(maxProfit([1])); // 0
