// const permute = (nums) => {
//   const used = new Set();
//   const path = [];
//   const res = [];

//   const dfs = () => {
//     if (path.length === nums.length) {
//       res.push([...path]);
//     }

//     for (let i = 0; i < nums.length; i++) {
//       if (used.has(nums[i])) continue;

//       path.push(nums[i]);
//       used.add(nums[i]);

//       dfs();

//       path.pop();
//       used.delete(nums[i]);
//     }
//   };

//   dfs();

//   return res;
// };

// #2

const permute = function (nums) {
  const result = [];

  const backtrack = (curr) => {
    if (curr.length === nums.length) {
      result.push(curr.slice());
    }

    for (let i = 0; i < nums.length; i += 1) {
      if (!curr.includes(nums[i])) {
        curr.push(nums[i]);
        backtrack(curr);
        curr.pop();
      }
    }
  };

  backtrack([]);

  return result;
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
