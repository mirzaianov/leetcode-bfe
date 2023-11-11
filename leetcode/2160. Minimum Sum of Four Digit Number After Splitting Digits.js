const minimumSum = function (num) {
    let digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }

    const sorted = digits.sort((a, b) => b - a);

    return sorted[0] + sorted[1] + 10 * (sorted[2] + sorted[3]);
};

console.log(minimumSum(2932)); // 52
console.log(minimumSum(4009)); // 13

/*

var minimumSum = function(num) {
    const digitsAsString = num.toString().split('')
    const sortedDigits = digitsAsString.map(digit => parseInt(digit)).sort();
    let new1 = [];
    let new2 = [];
    new1.push(sortedDigits[0]);
    new1.push(sortedDigits[2]);
    new2.push(sortedDigits[1]);
    new2.push(sortedDigits[3]);
    return parseInt(new1.join('')) + parseInt(new2.join(''))
};

*/
