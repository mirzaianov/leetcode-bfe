const timeRequiredToBuy = (tickets: number[], k: number): number => {
  let count = 0;

  for (let i = 0; i < tickets.length; i += 1) {
    if (i <= k) {
      count += Math.min(tickets[i], tickets[k]);
    } else {
      count += Math.min(tickets[i], tickets[k] - 1);
    }
  }

  return count;
};

export default timeRequiredToBuy;
