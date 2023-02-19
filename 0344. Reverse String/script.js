const reverseString = function (s) {
    let l = 0;
    r = s.length - 1;

    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ["o","l","l","e","h"]
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])); // ["h","a","n","n","a","H"]
