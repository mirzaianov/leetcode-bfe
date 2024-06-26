/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const guessNumber = (n: number): number => {
  let left = 1;
  let right: number = n;

  while (left <= right) {
    const mid: number = Math.floor((left + right) / 2);

    if (guess(mid) === 0) return mid;
    if (guess(mid) === -1) right = mid - 1;
    if (guess(mid) === 1) left = mid + 1;
  }
};

export default guessNumber;
