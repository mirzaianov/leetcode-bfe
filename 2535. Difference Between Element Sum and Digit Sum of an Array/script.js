const differenceOfSum = function (nums) {
    let elementSum = nums.reduce((a, b) => a + b, 0),
        digitSum = 0,
        s = nums.join('');

    for (let i = 0; i < s.length; i++) {
        digitSum += parseInt(s[i]);
    }

    return Math.abs(elementSum - digitSum);
};

console.log(differenceOfSum([1, 15, 6, 3])); // 9
console.log(differenceOfSum([1, 2, 3, 4])); // 0
