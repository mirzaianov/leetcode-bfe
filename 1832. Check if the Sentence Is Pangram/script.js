const checkIfPangram = function (sentence) {
    const alphabet = newAlphabet();

    for (let item of alphabet) {
        if (!sentence.includes(item)) {
            return false;
        }
    }

    return true;

    function newAlphabet() {
        let newArray = [];

        for (let i = 97; i <= 122; i++) {
            newArray.push(String.fromCharCode(i));
        }

        return newArray;
    }
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
console.log(checkIfPangram('leetcode'));
