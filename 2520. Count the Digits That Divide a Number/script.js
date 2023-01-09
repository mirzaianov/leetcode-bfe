const countDigits = function (num) {
    let num2Array = num
        .toString()
        .split('')
        .map((char) => parseInt(char));

    let count = 0;

    for (let item of num2Array) {
        if (num % item === 0) {
            count++;
        }
    }

    return count;
};

console.log(countDigits(7));
console.log(countDigits(121));
console.log(countDigits(1248));
