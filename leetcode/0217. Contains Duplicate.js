// const containsDuplicate = function (nums) {
//     const newSet = new Set();

//     for (let item of nums) {
//         if (newSet.has(item)) {
//             return true;
//         }
//         newSet.add(item);
//     }

//     return false;
// };

// #2

const containsDuplicate = function (nums) {
    const store = {};

    for (let i = 0; i < nums.length; i++) {
        store[nums[i]] = store[nums[i]] ? store[nums[i]] + 1 : 1;
    }

    for (let i in store) {
        if (store[i] > 1) return true;
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
