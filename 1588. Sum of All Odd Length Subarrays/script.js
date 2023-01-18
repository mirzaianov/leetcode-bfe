const sumOddLengthSubarrays = function (arr) {
    let i = 1;
    let sum = 0;

    while (i <= arr.length) {
        for (let j = 0; j <= arr.length - i; j++) {
            for (let k = j; k < i + j; k++) {
                sum += arr[k];
            }
        }
        i += 2;
    }

    return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); //58
console.log(sumOddLengthSubarrays([1, 2])); // 3
console.log(sumOddLengthSubarrays([10, 11, 12])); // 66
