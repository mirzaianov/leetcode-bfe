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

// var deepestLeavesSum = function (root) {
//   let sumArr = [];

//   dfs(root, 0);

//   return sumArr.at(-1);

//   function dfs(node, lvl) {
//     sumArr[lvl] = (sumArr[lvl] || 0) + node.val;

//     if (node.left) dfs(node.left, lvl + 1);
//     if (node.right) dfs(node.right, lvl + 1);
//   }
// };

// #2

const deepestLeavesSum = function (root) {
  const map = new Map();

  const dfs = (node, lvl) => {
    if (!node) return null;

    if (!node.left && !node.right) {
      map.set(lvl, map.get(lvl) + node.val || node.val);
    }

    dfs(node.left, lvl + 1);
    dfs(node.right, lvl + 1);

    return node;
  };

  dfs(root, 0);

  let max = -Infinity;

  for (const [key] of map) {
    max = Math.max(max, key);
  }

  return map.get(max);
};
