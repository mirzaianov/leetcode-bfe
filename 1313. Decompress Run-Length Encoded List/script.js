const decompressRLElist = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; i += 2) {
        for (let j = 0; j < nums[i]; j++) {
            result.push(nums[i + 1]);
        }
    }

    return result;
};

console.log(decompressRLElist([1, 2, 3, 4])); // [2, 4, 4, 4]
console.log(decompressRLElist([1, 1, 2, 3])); // [1, 3, 3]
