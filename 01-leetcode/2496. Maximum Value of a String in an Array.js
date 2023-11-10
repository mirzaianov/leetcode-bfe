const maximumValue = function (strs) {
    const accum = [];

    for (let item of strs) {
        // const number = +item;
        if (isNaN(+item)) {
            accum.push(item.length);
        } else {
            accum.push(+item);
        }
    }
    return Math.max(...accum);
};

console.log(maximumValue(['alic3', 'bob', '3', '4', '00000'])); // 5
console.log(maximumValue(['1', '01', '001', '0001'])); // 1
