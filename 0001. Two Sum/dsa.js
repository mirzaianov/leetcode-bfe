function binarySearch(array, item) {
    let low = 0,
        high = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2),
            guess = array[mid];

        console.log(`low: ${low}, high:  ${high}, mid:  ${mid}, guess:  ${guess}`);

        if (guess === item) {
            return mid;
        }

        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 21));
