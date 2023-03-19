// const findDisappearedNumbers = function (nums) {
//     const accum = [];

//     let i = 0;

//     while (i < nums.length) {
//         let pos = nums[i] - 1;

//         if (nums[i] !== nums[pos]) {
//             [nums[pos], nums[i]] = [nums[i], nums[pos]];
//         } else {
//             i++;
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== i + 1) {
//             accum.push(i + 1);
//         }
//     }

//     return accum;
// };

// #2

const findDisappearedNumbers = function (nums) {
    const store = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!nums.find((item) => item === i)) store.push(i);
    }

    return store;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
console.log(findDisappearedNumbers([1, 1])); // [2]
