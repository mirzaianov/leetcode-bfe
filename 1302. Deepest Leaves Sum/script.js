// var deepestLeavesSum = function (root) {
//   let queue = [root];

//   while (queue.length) {
//     let len = queue.length;
//     let res = 0;

//     for (let i = 0; i < len; i++) {
//       let curr = queue.shift();

//       res += curr.val;

//       if (curr.left) queue.push(curr.left);
//       if (curr.right) queue.push(curr.right);
//     }

//     if (!queue.length) return res;
//   }
// };

var deepestLeavesSum = function (root) {
  let sumArr = [];

  dfs(root, 0);

  return sumArr.at(-1);

  function dfs(node, lvl) {
    sumArr[lvl] = (sumArr[lvl] || 0) + node.val;

    if (node.left) dfs(node.left, lvl + 1);
    if (node.right) dfs(node.right, lvl + 1);
  }
};
