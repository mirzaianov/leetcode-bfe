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

var permute = function (nums) {
  const result = []; // Initialize an empty array to store all the permutations

  backtrack([]); // Call the backtrack function with an empty array to store the current permutation

  return result; // Return the array of all permutations

  // Backtracking function to find all permutations of an array of distinct integers
  function backtrack(curr) {
    // If the current permutation has the same length as the input array, i.e., we have used all the integers, add it to the result array and return
    if (curr.length === nums.length) {
      result.push(curr.slice()); // Make a copy of the current permutation and add it to the result array

      return;
    }

    // For each integer in the input array that hasn't been used in the current permutation, add it to the permutation and continue exploring
    for (let i = 0; i < nums.length; i++) {
      if (!curr.includes(nums[i])) {
        curr.push(nums[i]);
        backtrack(curr);
        curr.pop(); // Remove the last integer from the current permutation to backtrack and explore other possibilities
      }
    }
  }
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// console.log(permute([0, 1])); // [[0,1],[1,0]]
// console.log(permute([1])); // [[1]]
