const selfDividingNumbers = function (left, right) {
    const accum = [];

    for (let i = left; i <= right; i++) {
        const string = i.toString();
        let accum2 = 0;

        for (let j = 0; j < string.length; j++) {
            if (i % +string[j] !== 0) {
                break;
            } else {
                accum2++;
            }
        }

        if (accum2 === string.length) {
            accum.push(+string);
        }
    }

    return accum;
};

console.log(selfDividingNumbers(1, 22)); // [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(47, 85)); // [48,55,66,77]
