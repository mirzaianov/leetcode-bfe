const distributeCandies = (candies: number, num_people: number): number[] => {
  const res: number[] = Array(num_people).fill(0);
  let totalCandies = candies;
  let currCandies = 1;
  let i = 0;

  while (totalCandies > 0) {
    if (i >= num_people) i = 0;

    if (totalCandies < currCandies) {
      res[i] += totalCandies;
    } else {
      res[i] += currCandies;
    }

    totalCandies -= currCandies;
    i += 1;
    currCandies += 1;
  }

  return res;
};

export default distributeCandies;
