const numberOfLines = (widths: number[], s: string, limit: number = 100): number[] => {
  let lines = 1;
  let lineWidth = 0;

  for (const l of s) {
    const currWidth: number = widths[l.charCodeAt(0) - 97];

    if (lineWidth + currWidth > limit) {
      lines += 1;
      lineWidth = currWidth;
    } else {
      lineWidth += currWidth;
    }
  }

  return [lines, lineWidth];
};

export default numberOfLines;
