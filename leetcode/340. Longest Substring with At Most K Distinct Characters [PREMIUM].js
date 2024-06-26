// var lengthOfLongestSubstringKDistinct = function (s, k) {
//   let windowStart = 0;
//   let max = 0;
//   const soFar = new Map();

//   for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
//     let rightChar = s[windowEnd];

//     if (!soFar.get(rightChar)) soFar.set(rightChar, 1);
//     else soFar.set(rightChar, soFar.get(rightChar) + 1);

//     while (soFar.size > k) {
//       let leftChar = s[windowStart];

//       if (soFar.get(leftChar) > 1) soFar.set(leftChar, soFar.get(leftChar) - 1);
//       else soFar.delete(leftChar);

//       windowStart++;
//     }

//     max = Math.max(max, windowEnd - windowStart + 1);
//   }

//   return max;
// };

var lengthOfLongestSubstringKDistinct = function (s, k) {
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

console.log(lengthOfLongestSubstringKDistinct('eceba', 2)); // 3
console.log(lengthOfLongestSubstringKDistinct('aa', 1)); // 2
