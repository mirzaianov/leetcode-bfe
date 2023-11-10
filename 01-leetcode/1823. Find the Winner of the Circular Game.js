// var findTheWinner = function(n, k) {
//   const newArr = (num) => {
//     const res = [];

//     for (let i = 1; i <= num; i += 1) {
//       res.push(i);
//     }

//     return res;
//   };

//   const arr = newArr(n);

//   let i = 0;

//   while (arr.length > 1) {
//     while (i < k - 1) {
//       const first = arr.shift();
//       arr.push(first);

//       i += 1;
//     }

//     arr.shift();
//     i = 0;
//   }

//   return arr;
// };

const findTheWinner = (n, k) => {
  const ans = (n) => {
    if (n === 1) return 0;

    return (ans(n - 1) + k) % n;
  };

  return ans(n, k) + 1;
};
