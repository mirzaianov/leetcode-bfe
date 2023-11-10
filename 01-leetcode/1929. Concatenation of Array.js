'use strict';

/*
@param {number[]} nums
@return {number[]}
 */

const nums = [1, 3, 2, 1, 5];

// const getConcatenation = function (nums) {
//     let ans = nums;
//     nums.forEach(element => {
//         ans.push(element);
//     });
//     return ans;
// };

const getConcatenation = function (nums) {
    return nums.concat(nums);
};

console.log(getConcatenation(nums));
