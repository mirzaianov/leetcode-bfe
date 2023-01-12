const sortSentence = function (s) {
    // let result = [];

    // let newArray = s.split('').reverse().join('').split(' ').sort();
    // console.log(newArray);

    // for (let i = 0; i < newArray.length; i++) {
    //     result.push(newArray[i].split('').reverse().join('').slice(0, -1));
    // }

    // return newArray;
    // return result.join(' ');

    return s
        .split('')
        .reverse()
        .join('')
        .split(' ')
        .sort()
        .map((item) => item.split('').reverse().join('').slice(0, -1))
        .join(' ');
};

console.log(sortSentence('is2 sentence4 This1 a3'));
console.log(sortSentence('Myself2 Me1 I4 and3'));
