const kidsWithCandies = (candies: number[], extraCandies: number): boolean[] => {
  const max = Math.max(...candies);

  return candies.map((c) => c + extraCandies >= max);
};

export default kidsWithCandies;
