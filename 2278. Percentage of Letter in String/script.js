var percentageLetter = function(s, letter) {
    let count = 0;
        const len = s.length;
                
        for (let item of s) {
            if (item === letter) count++;
        }
                                    
    return Math.floor(count / len * 100);
}