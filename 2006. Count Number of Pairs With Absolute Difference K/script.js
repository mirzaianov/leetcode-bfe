const countKDifference = function (nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                count++;
            }
        }
    }

    return count;
};

console.log(countKDifference([1, 2, 2, 1], 1)); // 4
console.log(countKDifference([1, 3], 3)); // 0
console.log(countKDifference([3, 2, 1, 5, 4], 2)); // 3
