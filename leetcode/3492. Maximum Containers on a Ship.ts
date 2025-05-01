const maxContainers = (n: number, w: number, maxWeight: number): number => {
  const capacity: number = n ** 2;
  const totalWeight: number = Math.floor(maxWeight / w);

  return capacity < totalWeight ? capacity : totalWeight;
};

export default maxContainers;
