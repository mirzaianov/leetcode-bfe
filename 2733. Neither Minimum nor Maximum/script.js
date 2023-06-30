var findNonMinOrMax = function(nums) {
  
        const set = new Set(nums.sort((a, b) => a - b));
            
                const arr = [...set.values()];


                if (arr.length < 3) return -1;

                else return arr[1];
}