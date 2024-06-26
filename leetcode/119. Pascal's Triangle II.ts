const getRow = (rowIndex: number): number[] => {
  const store: number[][] = [];

  for (let i = 0; i <= rowIndex; i += 1) {
    store[i] = [];
    store[i][0] = 1;
    store[i][i] = 1;

    for (let j = 1; j < i; j += 1) {
      store[i][j] = store[i - 1][j - 1] + store[i - 1][j];
    }
  }

  return store[store.length - 1];
};
