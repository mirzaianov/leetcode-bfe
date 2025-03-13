const countStudents = (students: number[], sandwiches: number[]): number => {
  let pointer: number = students.length - 1;

  while (students.length > 0 && pointer >= 0) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      pointer = students.length - 1;
      sandwiches.shift();
    } else {
      students.push(students.shift()!);
      pointer -= 1;
    }
  }

  return students.length;
};

export default countStudents;
