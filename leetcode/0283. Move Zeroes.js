// const moveZeroes = function (nums) {
//     const digits = [],
//         nulls = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             nulls.push(nums[i]);
//         } else {
//             digits.push(nums[i]);
//         }
//     }

//     return [...digits, ...nulls];
// };

const moveZeroes = function (nums) {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]];
            j++;
        }
    }

    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 1])); // [1, 0 ,0]
