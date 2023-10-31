const findKOr = (nums, k) => {
  let result = 0;

  for (let i = 0; i < 32; i += 1) {
    let count = 0;

    for (const num of nums) {
      const shift = num >> i;

      if ((shift & 1) === 1) count += 1;
    }

    if (count >= k) result |= 1 << i;
  }

  return result;
};
