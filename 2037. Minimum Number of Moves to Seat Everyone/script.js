var minMovesToSeat = function (seats, students) {
  let sum = 0;

  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  for (let i = 0; i < seats.length; i++) {
    sum += Math.abs(seats[i] - students[i]);
  }

  return sum;
};

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])); // 4
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])); // 7
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])); // 4
console.log(minMovesToSeat([3, 20, 17, 2, 12, 15, 17, 4, 15, 20], [10, 13, 14, 15, 5, 2, 3, 14, 3, 18])); // 28
