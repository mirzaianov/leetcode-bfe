const restoreIpAddresses = function (s) {
    if (s.length < 4 || s.length > 12) {
        return [];
    }

    let res = [];
    let dfs = function (s, ip, c) {
        if (s.length === 0 && c === 0) {
            res.push(ip);
        }
        if (c === 0) {
            return;
        }

        for (let i = 0; i < 4; i++) {
            if (i >= s.length) {
                break;
            }
            let subIP = s.slice(0, i + 1);
            if (parseInt(subIP) > 255 || (subIP.length > 1 && subIP[0] === '0')) {
                return;
            }
            dfs(s.slice(i + 1), ip + (c === 4 ? '' : '.') + subIP, c - 1);
        }
    };

    dfs(s, '', 4);
    return res;
};

console.log(restoreIpAddresses('255255111251'));
console.log(restoreIpAddresses('25525511135')); // ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses('0000')); // ["0.0.0.0"]
console.log(restoreIpAddresses('101023')); // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
