const rob = (nums: number[]): number => {
  let rob1 = 0;
  let rob2 = 0;

  for (const num of nums) {
    const temp: number = Math.max(rob1 + num, rob2);

    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
};

export default rob;
