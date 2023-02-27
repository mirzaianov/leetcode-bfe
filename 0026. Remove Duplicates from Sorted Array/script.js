const removeDuplicates = function (nums) {
    nums.splice(0, nums.length, ...new Set(nums));
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5, [0,1,2,3,4,_,_,_,_,_]
console.log(removeDuplicates([1, 1, 2])); // 2, [1,2,_]
console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3])); // 3, [-1,0,3]
