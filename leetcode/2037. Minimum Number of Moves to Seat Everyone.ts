const minMovesToSeat = (seats: number[], students: number[]): number => {
  const sortedSeats: number[] = [...seats].sort((a, b) => a - b);
  const sortedStudents: number[] = [...students].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < sortedSeats.length; i += 1) {
    count += Math.abs(sortedSeats[i] - sortedStudents[i]);
  }

  return count;
};

export default minMovesToSeat;
