const findClosest = (x: number, y: number, z: number): number => {
  const dist1: number = Math.abs(z - x);
  const dist2: number = Math.abs(z - y);

  if (dist1 < dist2) return 1;

  if (dist1 > dist2) return 2;

  return 0;
};

export default findClosest;
