const garbageCollection = (garbage, travel) => {
  let count = 0;

  for (const item of garbage) {
    count += item.length;
  }

  let m = 0;
  let p = 0;
  let g = 0;

  for (let i = travel.length; i > 0; i -= 1) {
    m = m || garbage[i].includes('M');
    p = p || garbage[i].includes('P');
    g = g || garbage[i].includes('G');

    count += travel[i - 1] * (m + p + g);
  }

  return count;
};

// console.log(garbageCollection(['G', 'P', 'GP', 'GG'], [2, 4, 3])); // 21
console.log(garbageCollection(['MMM', 'PGM', 'GP'], [3, 10])); // 37
