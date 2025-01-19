interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>;
}

Array.prototype.groupBy = function <T>(this: T[], fn: (item: T) => string): Record<string, T[]> {
  const ans: Record<string, T[]> = {};

  for (const item of this) {
    const key: string = fn(item);

    ans[key] = ans[key] ?? [];
    ans[key].push(item);
  }

  return ans;
};
