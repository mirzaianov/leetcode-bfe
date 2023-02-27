// const removeDuplicates = function (nums) {
//     nums.splice(0, nums.length, ...new Set(nums));
// };

const removeDuplicates = function (nums) {
    let fastPointer = 0,
        slowPointer = 0;

    for (let i = 1; i < nums.length; i++) {
        fastPointer = i;
        if (nums[fastPointer] !== nums[slowPointer]) {
            slowPointer++;
            nums[slowPointer] = nums[fastPointer];
        }
    }

    return nums.slice(0, slowPointer + 1);
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5, [0,1,2,3,4,_,_,_,_,_]
console.log(removeDuplicates([1, 1, 2])); // 2, [1,2,_]
console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3])); // 3, [-1,0,3]
