const smallestEvenMultiple = function (n) {
    if (n % 2 === 0) {
        return n;
    } else {
        return 2 * n;
    }
};

console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(6));
