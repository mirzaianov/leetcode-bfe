const uniqueMorseRepresentations = function (words) {
    const morse = [
        '.-', // a
        '-...', // b
        '-.-.', // c
        '-..', // d
        '.', // e
        '..-.', // f
        '--.', // g
        '....', // h
        '..', // i
        '.---', // j
        '-.-', // k
        '.-..', // l
        '--', // m
        '-.', // n
        '---', // o
        '.--.', // p
        '--.-', // q
        '.-.', // r
        '...', // s
        '-', // t
        '..-', // u
        '...-', // v
        '.--', // w
        '-..-', // x
        '-.--', // y
        '--..', // z
    ];

    const alphabet = newAlphabet();

    const newMap = new Map(alphabet.map((x, i) => [x, morse[i]]));

    const newArr = [];

    for (let value of words) {
        let newSubArr = '';
        for (let item of value) {
            newSubArr += newMap.get(item);
        }
        newArr.push(newSubArr);
    }

    const count = new Set(newArr);

    return count.size;

    function newAlphabet() {
        let newArray = [];

        for (let i = 97; i <= 122; i++) {
            newArray.push(String.fromCharCode(i));
        }

        return newArray;
    }
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])); // 2
console.log(uniqueMorseRepresentations(['a'])); // 1
