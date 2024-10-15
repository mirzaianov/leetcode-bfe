const minimumMoves = (s: string): number => {
  const res = s.match(/X.{0,2}/g);

  return res ? res.length : 0;
};

export default minimumMoves;
