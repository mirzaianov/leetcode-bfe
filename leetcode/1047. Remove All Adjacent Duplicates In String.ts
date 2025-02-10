const removeDuplicates = (s: string): string => {
  const store: string[] = [];

  for (const l of s) {
    const last: string = store.at(-1) || '';

    l === last ? store.pop() : store.push(l);
  }

  return store.join('');
};

export default removeDuplicates;
