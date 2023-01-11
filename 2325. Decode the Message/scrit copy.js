const decodeMessage = function (key, message) {
    const alphabet = newAlphabet(),
        keys = key2Array();

    let result = '';

    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
            result += message[i];
        } else {
            result += alphabet[keys.indexOf(message[i])];
        }
    }

    return result;

    function newAlphabet() {
        let newArray = [];

        for (let i = 97; i <= 122; i++) {
            newArray.push(String.fromCharCode(i));
        }

        return newArray;
    }

    function key2Array() {
        return Array.from(new Set(key.replace(/ /g, '')));
    }
};

console.log(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv'));
console.log(decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb'));
