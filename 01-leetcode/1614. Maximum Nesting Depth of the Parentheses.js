const maxDepth = function (s) {
  let maxCount = 0,
    count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      maxCount = Math.max(maxCount, ++count);
    } else if (s[i] === ")") {
      count--;
    }
    console.log(`s[i]: ${s[i]}, maxCount: ${maxCount}, count: ${count}`);
  }

  return maxCount;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
console.log(maxDepth("(1)+((2))+(((3)))")); // 3
