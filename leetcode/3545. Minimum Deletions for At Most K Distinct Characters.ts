const minDeletion = (s: string, k: number): number => {
  const map = new Map<string, number>();

  for (const l of s) map.set(l, (map.get(l) || 0) + 1);

  if (map.size <= k) return 0;

  const vals: number[] = [...map.values()].sort((a, b) => b - a);
  let count = 0;

  while (vals.length > k) count += vals.pop() || 0;

  return count;
};

export default minDeletion;
