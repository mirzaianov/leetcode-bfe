const countPrimes = (n: number): number => {
  const store: number[] = new Array(n).fill(1);

  store[0] = 0;
  store[1] = 0;

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (store[i] !== 0) {
      for (let j = i; j * i < n; j += 1) {
        store[j * i] = 0;
      }
    }
  }

  return store.filter((item) => item === 1).length;
};

export default countPrimes;
