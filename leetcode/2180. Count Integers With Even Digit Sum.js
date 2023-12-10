const countEven = (num) => {
  let count = 0;

  for (let i = 1; i <= num; i += 1) {
    const current = String(i)
      .split('')
      .reduce((acc, item) => acc + Number(item), 0);

    if (current % 2 === 0) count += 1;
  }

  return count;
};
