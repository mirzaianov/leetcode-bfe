const letterCombinations = (digits) => {
    if (digits.length === 0) return [];

    const myObj = { 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz' };

    const result = [];

    calc(0, '');

    return result;

    function calc(index, letter) {
        if (index === digits.length) {
            result.push(letter);
            return;
        }

        for (const item of myObj[digits[index]]) {
            calc(index + 1, letter + item);
        }
    }
};

// console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations('')); // []
// console.log(letterCombinations('2')); // ["a","b","c"]
console.log(letterCombinations('2374'));
