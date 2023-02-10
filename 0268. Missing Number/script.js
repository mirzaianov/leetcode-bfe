const missingNumber = function (nums) {
    const arrLength = nums.length;

    return (arrLength * (arrLength + 1)) / 2 - nums.reduce((acc, item) => acc + item, 0);
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
