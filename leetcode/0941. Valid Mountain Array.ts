const validMountainArray = (arr: number[]): boolean => {
  if (arr.length < 2) return false;

  let status = false;

  for (let i = 1; i < arr.length; i += 1) {
    if (status === true && arr[i] > arr[i - 1]) return false;

    if (i === 1 && arr[i] < arr[i - 1]) return false;

    if (arr[i] === arr[i - 1]) return false;

    if (arr[i] < arr[i - 1]) status = true;
  }

  return status;
};
