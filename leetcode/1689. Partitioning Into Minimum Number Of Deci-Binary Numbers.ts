const minPartitions = (n: string): number => {
  for (let i = 9; i >= 0; i -= 1) {
    if (n.includes(String(i))) return i;
  }

  return -1;
};

export default minPartitions;
