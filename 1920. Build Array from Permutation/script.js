/*
@param {number[]} nums
@return {number[]}
*/

const nums = [5, 0, 1, 2, 3, 4];

// const buildArray = function (nums) {
//     let ans = [];
//     nums.forEach((element, index) => {
//         ans.push(nums[nums[index]]);
//     });
//     return ans;
// };

var buildArray = function (nums) {
    return nums.map((i) => nums[i]);
};

console.log(buildArray(nums));
