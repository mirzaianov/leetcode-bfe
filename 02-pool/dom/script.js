const app = document.querySelector('#app');
const { log } = console;

// log(app.children.length);

const treeDepth = (divElement, currentLevel) => {
  if (divElement.children.length === 0) return currentLevel;

  currentLevel += 1;

  let maxDepth = currentLevel;

  Array.from(divElement.children).forEach((element) => {
    maxDepth = Math.max(treeDepth(element, currentLevel), maxDepth);
    console.log(currentLevel, maxDepth);
  });

  return maxDepth;
};

log(treeDepth(app, 0));
