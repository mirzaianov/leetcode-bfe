// const singleNumber = function (nums) {
//     let mask = 0;

//     for (let item of nums) {
//         mask ^= item;
//     }

//     return mask;
// };

// #2

const singleNumber = function (nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }

    return result;
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
