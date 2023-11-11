const backspaceCompare = function (s, t) {
    return count(s) === count(t);

    function count(string) {
        let array = [];

        for (item of string) {
            if (item === '#') {
                array.pop();
            } else {
                array.push(item);
            }
        }

        return array.join('');
    }
};

console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.log(backspaceCompare('ab##', 'c#d#')); // true
console.log(backspaceCompare('a#c', 'b')); // false
