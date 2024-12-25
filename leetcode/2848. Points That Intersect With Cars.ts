const numberOfPoints = (nums: number[][]): number => {
  const sorted: number[][] = [...nums].sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [[...sorted[0]]];

  for (let i = 1; i < sorted.length; i += 1) {
    if (sorted[i][0] > merged.at(-1)![1]) {
      merged.push([...sorted[i]]);
    } else {
      merged.at(-1)![0] = Math.min(merged.at(-1)![0], sorted[i][0]);
      merged.at(-1)![1] = Math.max(merged.at(-1)![1], sorted[i][1]);
    }
  }

  return merged.reduce((acc: number, item: number[]) => acc + item[1] - item[0] + 1, 0);
};

export default numberOfPoints;
