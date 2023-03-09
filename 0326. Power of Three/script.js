// const isPowerOfThree = function (n) {
//     if (n < 1) {
//         return false;
//     } else if (n === 1) {
//         return true;
//     } else {
//         return isPowerOfThree(n / 3);
//     }
// };

const isPowerOfThree = function (n) {
    if (n === 0) return false;

    const base = 3;
    const result = Math.log10(n) / Math.log10(base);

    return result === Math.floor(result);
};

console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(1)); // true 3**[0]
console.log(isPowerOfThree(3)); // true 3**[1]
console.log(isPowerOfThree(4)); // false
console.log(isPowerOfThree(9)); // true 3**[2]
console.log(isPowerOfThree(27)); // true 3**[3]
console.log(isPowerOfThree(19682)); // false
