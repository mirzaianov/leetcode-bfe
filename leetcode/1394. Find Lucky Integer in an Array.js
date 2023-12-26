const findLucky = (arr) => {
  const toMap = (array) => {
    const map = new Map();

    for (const item of array) {
      map.set(item, map.get(item) + 1 || 1);
    }

    return map;
  };

  const arrMapped = toMap(arr);

  const toLuckyCount = (mapped) => {
    let max = -1;

    for (const [key, value] of mapped) {
      if (key === value) {
        max = Math.max(max, value);
      }
    }

    return max;
  };

  return toLuckyCount(arrMapped);
};
