const countTriples = (n: number): number => {
  let count = 0;

  for (let i = 1; i <= n - 2; i += 1) {
    for (let j = i + 1; j <= n - 1; j += 1) {
      const c = Math.sqrt(i ** 2 + j ** 2);

      if (c <= n && c % 1 === 0) count += 2;
    }
  }

  return count;
};

export default countTriples;
