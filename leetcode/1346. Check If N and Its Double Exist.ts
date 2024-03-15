const checkIfExist = (arr: number[]): boolean => {
  const store = new Set<number>();

  for (const item of arr) {
    if (store.has(item / 2) || store.has(item * 2)) return true;

    store.add(item);
  }

  return false;
};
