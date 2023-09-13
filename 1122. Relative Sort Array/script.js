
var relativeSortArray = function(arr1, arr2) {
  const map = new Map();
      
        for (let item of arr1) {
            map.get(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1)
              }
                  
                    const newArr = [];
                        
                          for (let item2 of arr2) {
                              const values = Array(map.get(item2)).fill(item2);
                                  newArr.push(...values);
                                      map.delete(item2);
                                        }
                                            
                                              const subArr = [];
                                                
                                                  for (let [key, value] of map) {
                                                      const values2 = Array(value).fill(key);
                                                          subArr.push(...values2);
                                                              map.delete(key);
                                                                }
                                                                    
                                                                      subArr.sort((a, b) => a - b);

                                                                        return [...newArr, ...subArr];
                                                                        };