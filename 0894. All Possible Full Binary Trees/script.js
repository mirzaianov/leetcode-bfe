// const allPossibleFBT = (number) => {
//   if (number % 2 === 0) {
//     return [];
//   }

//   const memo = new Array(number + 1).fill(null).map(() => []);

//   const helper = (n) => {
//     if (memo[n].length > 0) {
//       return memo[n];
//     }

//     if (n === 1) {
//       return [new TreeNode(0)];
//     }

//     const trees = [];

//     for (let i = 1; i < n - 1; i += 2) {
//       const lt = helper(i);
//       const rt = helper(n - 1 - i);

//       lt.forEach((ltr) => {
//         rt.forEach((rtr) => {
//           trees.push(new TreeNode(0, ltr, rtr));
//         });
//       });
//     }

//     memo[n] = trees;
//     return memo[n];
//   };

//   return helper(number);
// };

const allPossibleFBT = (n) => {
  const memo = new Map();

  if (n % 2 === 0) return [];
  if (n === 1) return [new TreeNode()];

  const res = [];

  for (let i = 1; i < n; i += 2) {
    const left = allPossibleFBT(i);
    const right = allPossibleFBT(n - i - 1);

    for (const l of left) {
      for (const r of right) {
        const root = new TreeNode(0, l, r);

        res.push(root);
      }
    }
  }

  memo.set(n, res);

  return res;
};
