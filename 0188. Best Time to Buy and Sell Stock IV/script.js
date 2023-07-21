var maxProfit = function (prices) {
  let [buy1, buy2, sell1, sell2] = [-Infinity, -Infinity, 0, 0];

  for (let price of prices) {
    buy1 = Math.max(buy1, 0 - price);
    buy2 = Math.max(buy2, sell1 - price);
    sell1 = Math.max(sell1, buy1 + price);
    sell2 = Math.max(sell2, buy2 + price);
  }

  return Math.max(sell1, sell2);
};

console.log(maxProfit(2, [2, 4, 1])); // 2
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3])); // 7
