function isPalindrome(s: string): boolean {
  const chars = `abcdefghijklmnopqrstuvwxyz0123456789`;
  let cleanedS = '';

  for (const l of s) {
    const current = l.toLowerCase();

    if (chars.includes(current)) cleanedS += current;
  }

  let left = 0;
  let right = cleanedS.length - 1;

  while (left <= right) {
    if (cleanedS[left] !== cleanedS[right]) return false;

    left += 1;
    right -= 1;
  }

  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
