const sortPeople = function (names, heights) {
  const myArray = [];

  for (let i = 0; i < names.length; i++) {
    myArray.push([names[i], heights[i]]);
  }

  myArray.sort((a, b) => b[1] - a[1]);

  return myArray.map(a => a[0]);
};

console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170])); // ["Mary", "Emma", "John"]
console.log(sortPeople(['Alice', 'Bob', 'Bob'], [155, 185, 150])); // ["Bob", "Alice", "Bob"]
