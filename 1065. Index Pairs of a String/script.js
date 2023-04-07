const indexPairs = function (text, words) {
  let result = [];

  for (let word of words) {
    let index = -1;

    while ((index = text.indexOf(word, index + 1)) !== -1) {
      result.push([index, index + word.length - 1]);
    }
  }

  result.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  return result;
};

console.log(indexPairs('thestoryofleetcodeandme', ['story', 'fleet', 'leetcode'])); // [[3,7],[9,13],[10,17]]
console.log(indexPairs('ababa', ['aba', 'ab'])); // [[0,1],[0,2],[2,3],[2,4]]
