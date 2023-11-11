const squareIsWhite = function (coordinates) {
  let coordinates2Array = coordinates.toString().split('');

  const hor = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    ver = ['1', '2', '3', '4', '5', '6', '7', '8'];

  let indexOfHor = hor.indexOf(coordinates2Array[0]) + 1;

  let indexOfVer = ver.indexOf(coordinates2Array[1]) + 1;

  return (indexOfHor + indexOfVer) % 2 !== 0;
};

console.log(squareIsWhite('a1')); // false
console.log(squareIsWhite('h3')); // true
console.log(squareIsWhite('c7')); // false
