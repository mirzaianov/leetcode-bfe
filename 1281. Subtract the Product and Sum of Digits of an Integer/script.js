const subtractProductAndSum = function (n) {
    let n2Array = n
        .toString()
        .split('')
        .map(function (char) {
            return parseInt(char, 10);
        });

    let multi = n2Array.reduce(function (acc, num) {
        return acc * num;
    }, 1);

    let sum = n2Array.reduce(function (acc, num) {
        return acc + num;
    }, 0);

    return multi - sum;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
