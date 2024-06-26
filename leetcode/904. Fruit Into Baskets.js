var totalFruit = function (fruits) {
  s = fruits;
  k = 2;

  let windowStart = 0;
  let max = 0;
  const map = new Map();

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];

    map.get(rightChar) ? map.set(rightChar, map.get(rightChar) + 1) : map.set(rightChar, 1);

    while (map.size > k) {
      let leftChar = s[windowStart];

      map.get(leftChar) > 1 ? map.set(leftChar, map.get(leftChar) - 1) : map.delete(leftChar);

      windowStart++;
    }

    max = Math.max(max, windowEnd - windowStart + 1);
  }

  return max;
};
