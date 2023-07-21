var maxProfit = function (prices, fee) {
  let buy = -Infinity;
  let sell = 0;

  for (let price of prices) {
    buy = Math.max(buy, sell - (price + fee));
    sell = Math.max(sell, buy + price);
  }

  return sell;
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)); // 8
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3)); // 6
