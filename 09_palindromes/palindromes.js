const palindromes = function (text) {
    let lower = text.toLowerCase();
    let pattern = /([a-z0-9])/g
    let result = lower.match(pattern);
    let len = result.length
    let half = Math.floor(result.length / 2)

    if (result.length % 2 == 0) { 
        half = result.length / 2
    };

    for (let i = 0; i <= half; i++) {
        if (result[i] != result[len- 1 - i]){
            return false;
        }
        
        
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
