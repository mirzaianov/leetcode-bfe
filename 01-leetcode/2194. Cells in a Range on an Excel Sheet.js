const cellsInRange = function (s) {
    result = [];

    for (let j = s[0].charCodeAt(0); j <= s[3].charCodeAt(0); j++) {
        for (let i = s[1].charCodeAt(0); i <= s[4].charCodeAt(0); i++) {
            result.push(`${String.fromCharCode(j)}${String.fromCharCode(i)}`);
        }
    }

    return result;
};

console.log(cellsInRange('K1:L2')); // ["K1", "K2", "L1", "L2"]
console.log(cellsInRange('A1:F1')); // ["A1", "B1", "C1", "D1", "E1", "F1"]
