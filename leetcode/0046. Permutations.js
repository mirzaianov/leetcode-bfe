// const permute = (nums) => {
//   // Backtracking
//   const used = new Set(); // Keep track of what we have used
//   const path = []; // Current potiential answer array
//   const res = []; // Result array to be returned

//   const dfs = () => {
//     // If path is same length as nums, we know we have an answer. Push it to res array
//     if (path.length === nums.length) {
//       res.push([...path]); // We use spread operator to clone since arrays are pass by reference
//     }

//     // Every DFS we loop all numbers
//     for (let i = 0; i < nums.length; i++) {
//       // We can skip these numbers if they have been used
//       if (used.has(nums[i])) continue;

//       // Add to our potienial answer array and make it used by adding to used set
//       path.push(nums[i]);
//       used.add(nums[i]);

//       // After adding, we call DFS again. DFS will continue till we hit the base case above
//       // Think of this as just continuing down a path till we have an answer
//       dfs();

//       // Once we pop out of DFS, we need to remove from path array and remove from used Set
//       // This will let it be used later in further paths
//       path.pop();
//       used.delete(nums[i]);
//     }
//   };

//   // Start DFS
//   // All variables are global, no need to pass in anything
//   dfs();

//   return res;
// };

// #2

const permute = function (nums) {
  const result = [];

  const backtrack = (curr) => {
    if (curr.length === nums.length) {
      result.push(curr.slice());

      return;
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
// console.log(permute([0, 1])); // [[0,1],[1,0]]
// console.log(permute([1])); // [[1]]
