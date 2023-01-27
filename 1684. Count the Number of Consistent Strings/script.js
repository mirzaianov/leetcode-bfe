const countConsistentStrings = function (allowed, words) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        const newSet = new Set(words[i]);

        let setNumbers = 0;

        for (let value of newSet.values()) {
            if (allowed.includes(value)) {
                setNumbers++;
            }
        }

        if (setNumbers === newSet.size) {
            count++;
        }
    }

    return count;
};

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])); // 2
console.log(countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])); // 7
console.log(countConsistentStrings('cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'])); // 4
