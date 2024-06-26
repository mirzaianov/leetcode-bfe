const numberOfLines = (widths, s) => {
  const letters = `abcdefghijklmnopqrstuvwxyz`;
  const map = new Map();
  const len = widths.length;

  for (let i = 0; i < len; i += 1) {
    map.set(letters[i], widths[i]);
  }

  const len2 = s.length;
  let widthInPixels = 0;
  let totalLinesCount = 1;

  for (let j = 0; j < len2; j += 1) {
    widthInPixels += map.get(s[j]);

    if (widthInPixels > 100) {
      totalLinesCount += 1;
      j -= 1;
      widthInPixels = 0;
    }
  }

  return [totalLinesCount, widthInPixels];
};

// console.log(
//   numberOfLines(
//     [
//       10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
//       10, 10, 10,
//     ],
//     'abcdefghijklmnopqrstuvwxyz',
//   ),
// ); // [3, 60]
console.log(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10,
    ],
    'bbbcccdddaaa',
  ),
); // [2, 4]
