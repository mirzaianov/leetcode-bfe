const firstPalindrome = function (words) {
    for (let item of words) {
        let left = 0,
            right = item.length - 1;
        let status;

        while (left <= right) {
            if (item[left] === item[right]) {
                status = true;
            } else {
                status = false;
                break;
            }

            left++;
            right--;
        }

        if (status === true) return item;
    }

    return '';
};

console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool'])); // "ada"
console.log(firstPalindrome(['notapalindrome', 'racecar'])); // "racecar"
console.log(firstPalindrome(['def', 'ghi'])); // ""
console.log(
    firstPalindrome([
        'umicrszeaswtfmctwvoogehszwdjrwdcgyxxetbzevxrqphubyqbgpfetguyv',
        'vzdzfwyevkvqhmvqssnvpayihawydzcovzmh',
        'drvqqepesvornphmikbimxennygxisdysssmxjmaaecaqiwdgfxitoopigxauoojsebjmbcrymvpnnfomlkg',
        'vvszfvtykdyfiywxgxmjpcawzdaovbujmexggwczovhspkrdsskxzrpgfaspnbncdspktcyfkkshpyojwwlysizd',
        'epdtgfhgninnwqzztwm',
        'dmhynaogcxyaxsghzjwzyqfuwyinstxoqcdkxeobinpqeplw',
        'ruhxgdrzfyqyqmxclfqosyczqapiizxlzgixdxthhrv',
        'dwcblqnxtrwtqmtqenidhxnifdbmdvobwmcvwjxgbyjzgvrqzlskjbfirauguhyyjhlotuckssrkqzppzbqd',
        'gxdq',
        'paesyowqeguvxozbixjqppeagycjx',
        'glstauwugkidegnllapgzbzchckepmhbameuigsiqywbilwolxuwzzjwzouqknhlkbjzejxtponmkqjlojurxnryxyqy',
        'inyhioiwanafuhsprudtkqztoakxhbmqcmibsxlhycbmqrvtfabsncmiymthcxwkwkq',
        'djknenppuleedpptrfjgqfejcoghnxjlvjalxkyvnujgiiwdbtvgqvgsivkzqcrbfcvooyhqmrlacyiozytmampjwpknrj',
        'zzrpjoogwkdmdxdkdwgwugqtmzryrgtelnvydyqewpdzzptqzvffppgnhhcaiqotmyslntlwjajzuzbawidpxjtyxryg',
        'xmegifttkamzbpjqbghgwdrkvtnuwfmjdmwehdqiyvgpxxlbkcvkemjbmhbyeqyfssytuwaeysvgnidhcgpncxdxxzhrkbvyqfrs',
        'wgljaiyhyfdijjgihseciabfcoqfojhswewpkpartzmaaglvdfifpptycyonigwcgyklapzojivgojcrevugspejmwanolg',
        'oceurgzgvvctgydqexhghwcochhmtoxjugreqfdnsshffngchetrwedhinosdhwlgviohpkjowr',
        'dyl',
        'vjxkcihfmnmmz',
        'aheg',
        'dwsomlqmaqifihkwahvywzqamgominhxfsgrgbgvoiopnikhxonpetelfsguvhxgiujrij',
        'pdrjgfqzyqczpwdsfzypgkmsvnpboutmcffqrwuzkchaufymmczrdwulbvbanungpxqk',
        'eudbizaabgfzqytowifsuovmxmkjgajtliyfycbrkxeaarakapqoihawmdzmglfnglpwqnfd',
        'txdclnfwxevu',
        'kslqrafjshhadqszeljcekrpnpxqgppbnadmzmpufvadcghxqdqmafpbnutifigstxyilmgx',
        'yhhvhyoolv',
        'sjtubggxcla',
        'vydf',
    ])
); // ""
