const numWaterBottles = (numBottles: number, numExchange: number): number => {
  let count = numBottles;

  while (numBottles >= numExchange) {
    const rest = numBottles % numExchange;

    numBottles = Math.floor((numBottles - rest) / numExchange);
    count += numBottles;
    numBottles += rest;
  }

  return count;
};

export default numWaterBottles;
