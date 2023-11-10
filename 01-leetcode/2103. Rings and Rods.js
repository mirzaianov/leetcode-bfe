// const countPoints = function (rings) {
//     let ringsOnRods = Array.from({ length: 10 }, () => '');

//     for (let i = 1; i < rings.length; i += 2) {
//         ringsOnRods[rings[i]] += rings[i - 1];
//     }

//     let count = 0;

//     ringsOnRods.map(function (item) {
//         if (item.includes('B') && item.includes('G') && item.includes('R')) {
//             return count++;
//         }
//     });

//     return count;
// };

// #2

var countPoints = function (rings) {
  let rods = '0123456789';
  let count = 0;

  for (let rod of rods) {
    if (rings.includes(`R${rod}`) && rings.includes(`G${rod}`) && rings.includes(`B${rod}`)) count++;
  }

  return count;
};

console.log(countPoints('B0B6G0R6R0R6G9')); // 1
console.log(countPoints('B0R0G0R9R0B0G0')); // 1
console.log(countPoints('G4')); // 0
