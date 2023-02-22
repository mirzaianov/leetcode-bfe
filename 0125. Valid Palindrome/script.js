const isPalindrome = function (s) {
    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();

    return s === s.split('').reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
