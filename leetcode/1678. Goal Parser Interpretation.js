const interpret = function (command) {
    let result = [];

    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') {
            result.push('G');
        } else if (command[i] === '(' && command[i + 1] === ')') {
            result.push('o');
        } else if (command[i] === '(' && command[i + 1] === 'a') {
            result.push('al');
        } else if (command[i] === ')' || command[i] === 'a' || command[i] === 'l') {
            continue;
        }
    }

    return result.join('');
};

console.log(interpret('G()(al)')); // "Goal"
console.log(interpret('G()()()()(al)')); // "Gooooal"
console.log(interpret('(al)G(al)()()G')); //"alGalooG"
