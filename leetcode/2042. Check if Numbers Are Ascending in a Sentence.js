const areNumbersAscending = (s) => {
  const arr = s.split(' ');
  let max = -1;

  for (const w of arr) {
    const num = +w;

    if (!Number.isNaN(num)) {
      if (num <= max) return false;

      max = num;
    }
  }

  return true;
};
