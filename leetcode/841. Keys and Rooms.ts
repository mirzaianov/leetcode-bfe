const canVisitAllRooms = (rooms: number[][]): boolean => {
  const stack: number[] = [0];
  const visited = new Set();

  while (stack.length) {
    const curr: number | undefined = stack.pop();

    if (curr !== undefined) {
      if (!visited.has(curr)) {
        stack.push(...rooms[curr]);
        visited.add(curr);
      }
    }
  }

  return visited.size === rooms.length;
};
