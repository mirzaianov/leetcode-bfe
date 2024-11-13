const numberGame = (nums: number[]): number[] => {
  const sorted: number[] = [...nums].sort((a, b) => b - a);
  const arr: number[] = [];

  while (sorted.length) {
    const alice = sorted.pop();
    const bob = sorted.pop();

    if (alice !== undefined && bob !== undefined) {
      arr.push(bob, alice);
    }
  }

  return arr;
};

export default numberGame;
