const numOfUnplacedFruits = (fruits: number[], baskets: number[]): number => {
  let count = 0;

  for (let i = 0; i < fruits.length; i += 1) {
    for (let j = 0; j < baskets.length; j += 1) {
      if (fruits[i] <= baskets[j]) {
        count += 1;
        baskets[j] = 0;

        break;
      }
    }
  }

  return fruits.length - count;
};

export default numOfUnplacedFruits;
