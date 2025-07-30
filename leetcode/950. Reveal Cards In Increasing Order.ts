const deckRevealedIncreasing = (deck: number[]): number[] => {
  const store: number[] = [...deck].sort((a, b) => a - b);
  const res: number[] = [];

  while (store.length > 0) {
    const max: number | undefined = store.pop();

    if (res.length > 0) {
      const curr: number | undefined = res.pop();

      if (curr !== undefined) res.unshift(curr);
    }

    if (max !== undefined) res.unshift(max);
  }

  return res;
};

export default deckRevealedIncreasing;
