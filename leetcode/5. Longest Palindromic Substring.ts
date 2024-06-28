const expandAroundCenter = (s: string, left: number, right: number): string => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left -= 1;
    right += 1;
  }

  return s.substring(left + 1, right);
};

const longestPalindrome = (s: string): string => {
  let longest = '';

  for (let i = 0; i < s.length; i += 1) {
    const odd = expandAroundCenter(s, i, i);

    if (odd.length > longest.length) longest = odd;

    const even = expandAroundCenter(s, i, i + 1);

    if (even.length > longest.length) longest = even;
  }

  return longest;
};

export default longestPalindrome;

