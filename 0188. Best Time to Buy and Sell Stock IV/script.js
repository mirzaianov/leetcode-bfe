var maxProfit = function (k, prices) {
  let buy = Array(k).fill(-Infinity);
  let sell = Array(k + 1).fill(0);

  for (let price of prices) {
    nextBuy = Array(k).fill(-Infinity);
    nextSell = Array(k + 1).fill(0);

    for (let i = 0; i < k; i++) {
      nextBuy[i] = Math.max(buy[i], sell[i] - price);
      nextSell[i + 1] = Math.max(sell[i + 1], buy[i] + price);
    }

    buy = nextBuy;
    sell = nextSell;
  }

  return Math.max(...sell);
};

console.log(maxProfit(2, [2, 4, 1])); // 2
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3])); // 7
