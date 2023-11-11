const sumZero = function (n) {
    let res = n % 2 === 0 ? [] : [0];
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        res.push(i, -i);
    }
    return res;
};

console.log(sumZero(17));
console.log(sumZero(5));
console.log(sumZero(3));
console.log(sumZero(1));
