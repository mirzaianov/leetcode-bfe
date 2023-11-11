/*
@param {number[]} nums
@return {number[]}
 */

const nums = [1, 2, 3, 4];
console.log(nums);

// const runningSum = (nums) => {
//     let result = [];

//     for (let i = 1; i < nums.length + 1; i++) {
//         result.push(nums[i] + nums[i - 1]);
//     }

//     return result;
// };

const runningSum = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};

// runningSum(nums); // [1,3,6,10]
console.log(runningSum(nums)); // [1,3,6,10]
