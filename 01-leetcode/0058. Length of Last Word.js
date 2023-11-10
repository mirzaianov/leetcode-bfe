const lengthOfLastWord = function (s) {
  const trim = s.trim().split(' ');

  return trim[trim.length - 1].length;
};
