function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('text')); // false
console.log(isPalindrome('assa')); // true
