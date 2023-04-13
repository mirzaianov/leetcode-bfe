const map = function (arr, fn) {
  return myOwnMap(arr, fn);

  function myOwnMap(someArray, someFunction) {
    const newArray = [];

    for (let i = 0; i < someArray.length; i++) {
      newArray.push(someFunction(someArray[i], i));
    }

    return newArray;
  }
};
