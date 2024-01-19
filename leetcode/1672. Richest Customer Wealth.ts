function maximumWealth(accounts: number[][]): number {
  let max = -Infinity;

  for (const account of accounts) {
    const current = account.reduce((item: number, acc: number) => item + acc, 0);

    max = Math.max(max, current);
  }

  return max;
}
