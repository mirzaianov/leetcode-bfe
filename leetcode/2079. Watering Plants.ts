const wateringPlants = (plants: number[], capacity: number): number => {
  let count = 0;
  let currCapacity: number = capacity;

  for (let i = 0; i < plants.length; i += 1) {
    const isEnough: boolean = currCapacity - plants[i] >= 0;

    if (isEnough) {
      count += 1;
    } else {
      currCapacity = capacity;
      count += i * 2 + 1;
    }

    currCapacity -= plants[i];
  }

  return count;
};

export default wateringPlants;
