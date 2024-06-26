const reverseWords = (s: string): string =>
  s
    .split(' ')
    .map((item) => item.split('').reverse().join(''))
    .join(' ');

console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords('God Ding')); // "doG gniD"
