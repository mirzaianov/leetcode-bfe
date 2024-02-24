const numSquares = (n: number): number => {
  const dp: number[] = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;

  let count = 1;

  while (count ** 2 <= n) {
    const sq: number = count ** 2;

    for (let i = sq; i <= n; i += 1) {
      dp[i] = Math.min(dp[i - sq] + 1, dp[i]);
    }

    count += 1;
  }

  return dp[n];
};
