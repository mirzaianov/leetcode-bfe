const isPowerOfThree = function (n) {
    if (n < 1) {
        return false;
    } else if (n === 1) {
        return true;
    } else {
        return isPowerOfThree(n / 3);
    }
};

console.log(isPowerOfThree(0));
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(3));
console.log(isPowerOfThree(5));
console.log(isPowerOfThree(9));
