// const maxProfit = function (prices) {
//     let first = 0,
//         second = 0,
//         result = 0,
//         index = 0;

//     while (index < prices.length) {
//         first = index;

//         if (prices[first] < prices[second]) {
//             second = first;
//         }

//         if (prices[first] > prices[second]) {
//             result += prices[first] - prices[second];
//             second = first;
//         }

//         // console.log(index, first, second, result);
//         index++;
//     }

//     return result;
// };

// #2

var maxProfit = function (prices) {
  let buy = -Infinity;
  let sell = 0;

  for (let price of prices) {
    buy = Math.max(buy, sell - price);
    sell = Math.max(sell, buy + price);
  }

  return sell;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([2, 1, 2, 0, 1])); // 2
