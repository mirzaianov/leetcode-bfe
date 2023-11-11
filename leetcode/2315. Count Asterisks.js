const countAsterisks = function (s) {
    let status = 2,
        count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '|') {
            status++;
        }

        if (s[i] === '*' && status % 2 === 0) {
            count++;
        }
    }

    return count;
};

console.log(countAsterisks('l|*e*et|c**o|*de|')); // 2
console.log(countAsterisks('iamprogrammer')); // 2
console.log(countAsterisks('yo|uar|e**|b|e***au|tifu|l')); // 5
