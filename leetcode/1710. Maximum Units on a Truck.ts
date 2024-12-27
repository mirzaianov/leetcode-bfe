const maximumUnits = (boxTypes: number[][], truckSize: number): number => {
  const sorted: number[][] = [...boxTypes].map((item) => [...item]).sort((a, b) => b[1] - a[1]);
  let freeSpace: number = truckSize;
  let i = 0;
  let count = 0;

  while (freeSpace && sorted[i]) {
    if (freeSpace > sorted[i][0]) {
      count += sorted[i][0] * sorted[i][1];
      freeSpace -= sorted[i][0];
    } else {
      count += freeSpace * sorted[i][1];
      freeSpace -= freeSpace;
    }

    i += 1;
  }

  return count;
};

export default maximumUnits;
