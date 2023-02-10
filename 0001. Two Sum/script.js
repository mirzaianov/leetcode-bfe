// const twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const complement = target - element;

        if (map[complement] !== undefined) {
            return [map[complement], i];
        } else {
            map[element] = i;
        }
    }

    return [];
}

// const twoSum = function (nums, target) {
//     const map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const match = map.get(target - nums[i]);

//         if (match !== undefined) {
//             return [match, i];
//         }

//         map.set(nums[i], i);
//     }

//     return [];
// };

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
