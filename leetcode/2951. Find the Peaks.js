const findPeaks = (mountain) => {
  const res = [];

  for (let i = 1; i < mountain.length - 1; i += 1) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      res.push(i);
    }
  }

  return res;
};
