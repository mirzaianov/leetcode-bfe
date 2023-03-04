// const isPalindrome = function (s) {
//     s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();

//     return s === s.split('').reverse().join('');
// };

const isPalindrome = function (s) {
    const sLowerCased = toLowerCase(s);

    const sAlphaNumered = alphaNumOnly(sLowerCased);

    const sReversed = reverseString(sAlphaNumered);

    if (sAlphaNumered === sReversed) {
        return true;
    } else {
        return false;
    }

    function reverseString(string) {
        let stringToArray = string.split('');
        let left = 0;
        let right = string.length - 1;

        while (left < right) {
            [stringToArray[left], stringToArray[right]] = [stringToArray[right], stringToArray[left]];
            left++;
            right--;
        }

        return stringToArray.join('');
    }

    function alphaNumOnly(string) {
        let result = '';
        const regex = /[a-z0-9]/;

        for (let letter of string) {
            if (regex.test(letter)) {
                result += letter;
            }
        }

        return result;
    }

    function toLowerCase(string) {
        let result = '';

        for (let i = 0; i < string.length; i++) {
            const charCode = string.charCodeAt(i);

            if (charCode >= 65 && charCode <= 90) {
                result += String.fromCharCode(charCode + 32);
            } else {
                result += string[i];
            }
        }

        return result;
    }
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
