const trimMean = (arr) => {
  arr.sort((a, b) => a - b);

  const five = Math.round(arr.length * 0.05);

  arr.splice(0, five);
  arr.splice(arr.length - five);

  return arr.reduce((acc, item) => acc + item, 0) / arr.length;
};
