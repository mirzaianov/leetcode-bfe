const findCenter = (edges: number[][]): number => {
  const [[a, b], [c, d]] = edges;

  return a === c || b === c ? c : d;
};

export default findCenter;
