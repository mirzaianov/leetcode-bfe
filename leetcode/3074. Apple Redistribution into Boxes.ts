const minimumBoxes = (apple: number[], capacity: number[]): number => {
  const sortedBoxes: number[] = [...capacity].sort((a, b) => b - a);
  let allApples: number = apple.reduce((acc: number, item: number) => acc + item, 0);
  let count = 0;

  for (const box of sortedBoxes) {
    if (allApples <= 0) return count;

    allApples -= box;
    count += 1;
  }

  return count;
};

export default minimumBoxes;
