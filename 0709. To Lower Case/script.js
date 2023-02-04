const toLowerCase = function (s) {
    // return s.toLowerCase();
    let splittedArray = s.split('');
    for (let i = 0; i < splittedArray.length; i++) {
        if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            splittedArray[i] = String.fromCharCode(s.charCodeAt(i) + 32);
        }
    }
    return splittedArray.join('');
};

console.log(toLowerCase('Hello')); // "hello"
console.log(toLowerCase('here')); // "here"
console.log(toLowerCase('LOVELY')); // "lovely"
