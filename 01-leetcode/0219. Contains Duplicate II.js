// const containsNearbyDuplicate = function (nums, k) {
//   if (nums.length <= 1) return false;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j <= i + k; j++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

const containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    if (set.has(nums[r])) {
      return true;
    }

    set.add(nums[r]);

    if (r - l >= k) {
      set.delete(nums[l]);
      l++;
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
