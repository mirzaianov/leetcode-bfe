const longestCommonSubsequence = (text1: string, text2: string): number => {
  const dp = Array(text1.length + 1)
    .fill(0)
    .map(() => new Array(text2.length + 1).fill(0));

  for (let i = text1.length - 1; i >= 0; i -= 1) {
    for (let j = text2.length - 1; j >= 0; j -= 1) {
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i + 1][j + 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  return dp[0][0];
};

export default longestCommonSubsequence;
