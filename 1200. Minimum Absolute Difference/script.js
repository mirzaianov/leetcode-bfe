var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);

  let minVal = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    const curr = Math.abs(arr[i + 1] - arr[i]);

    minVal = Math.min(minVal, curr);
  }

  const res = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(arr[i + 1] - arr[i]);

    if (diff === minVal) {
      res.push([arr[i], arr[i + 1]]);
    }
  }

  return res;
};
