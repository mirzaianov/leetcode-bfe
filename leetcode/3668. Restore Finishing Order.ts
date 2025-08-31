const recoverOrder = (order: number[], friends: number[]): number[] => {
  const res: number[] = [];

  for (const id of order) {
    if (friends.includes(id)) res.push(id);
  }

  return res;
};

export default recoverOrder;
