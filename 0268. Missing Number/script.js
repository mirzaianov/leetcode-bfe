// const missingNumber = function (nums) {
//     const arrLength = nums.length;

//     return (arrLength * (arrLength + 1)) / 2 - nums.reduce((acc, item) => acc + item, 0);
// };

// #2

// const missingNumber = function (nums) {
//     const arr = [];

//     for (let i = 0; i <= nums.length; i++) {
//         arr.push(i);
//     }

//     const fullLength = arr.reduce((acc, item) => acc + item, 0);
//     const numsLength = nums.reduce((acc, item) => acc + item, 0);

//     return fullLength - numsLength;
// };

// #3

const missingNumber = function (nums) {
    const fullArr = () => {
        result = [];

        for (let i = 0; i <= nums.length; i++) {
            result.push(i);
        }

        return result;
    };

    const newArr = fullArr();

    return sum(newArr) - sum(nums);

    function sum(array) {
        return array.reduce((acc, item) => acc + item, 0);
    }
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
