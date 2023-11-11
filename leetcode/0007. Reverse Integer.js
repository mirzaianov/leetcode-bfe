const reverse = function (x) {
    let max = 2 ** 31 - 1;
    let min = -(2 ** 31);
    let arr = x.toString().split('').reverse();

    if (arr[0] === '0') {
        arr.shift();
    }

    if (arr[arr.length - 1] === '-') {
        const temp = arr[arr.length - 1];

        arr.pop();
        arr.unshift(temp);
    }

    let result = arr.join('');

    if (result < min || result > max) return 0;

    return result;
};

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
