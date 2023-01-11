const decodeMessage = function (key, message) {
    const alphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];

    const keys = key2Array();

    let result = '';

    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
            result += message[i];
        } else {
            result += alphabet[keys.indexOf(message[i])];
        }
    }

    return result;

    function key2Array() {
        return Array.from(new Set(key.replace(/ /g, '')));
    }
};

console.log(decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv'));
console.log(decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb'));
