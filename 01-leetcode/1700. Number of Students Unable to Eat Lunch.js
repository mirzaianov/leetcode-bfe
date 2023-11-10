const countStudents = function (students, sandwiches) {
  let pointer1 = students.length - 1;
  let pointer2 = 0;

  while (students.length > 0 && pointer1 >= pointer2) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      pointer1 = students.length - 1;

      sandwiches.shift();
      pointer2 = 0;
    } else {
      const move = students.shift();

      students.push(move);
      pointer1 -= 1;
    }
  }

  return students.length;
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
