// const averageOfSubtree = function (root) {
//   let ans = 0;

//   dfs(root);

//   return ans;

//   function dfs(node) {
//     if (!node) return [0, 0];

//     let [leftSum, leftCount] = dfs(node.left);
//     let [rightSum, rightCount] = dfs(node.right);

//     let sum = leftSum + rightSum + node.val;
//     let count = leftCount + rightCount + 1;

//     if (Math.floor(sum / count) === node.val) ans++;

//     return [sum, count];
//   }
// };

// #2

const averageOfSubtree = function (root) {
  let res = 0;

  const dfs = (node) => {
    if (!node) return [0, 0];

    const [leftSum, leftCount] = dfs(node.left);
    const [rightSum, rightCount] = dfs(node.right);

    const sum = leftSum + rightSum + node.val;
    const count = leftCount + rightCount + 1;

    if (Math.floor(sum / count) === node.val) res += 1;

    return [sum, count];
  };

  dfs(root);

  return res;
};
