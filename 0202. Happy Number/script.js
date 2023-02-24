const isHappy = function (n) {
    if (n < 1) return false;

    const squares = { 0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81 };
    let set = new Set();

    while (!set.has(n)) {
        set.add(n);

        let s = n.toString();
        n = 0;

        for (let i = 0; i < s.length; ++i) {
            n += squares[s[i]];
        }

        if (n == 1) return true;
    }

    return false;
};

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
