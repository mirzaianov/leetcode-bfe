const coinChange = (coins: number[], amount: number): number => {
  const arr: number[] = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);

  arr[0] = 0;

  for (const c of coins) {
    for (let i = c; i <= amount; i += 1) {
      arr[i] = Math.min(arr[i], arr[i - c] + 1);
    }
  }

  return arr[amount] > amount ? -1 : arr[amount];
};

export default coinChange;
