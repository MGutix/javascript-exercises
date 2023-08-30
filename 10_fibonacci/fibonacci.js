const fibonacci = function(x) {
    if (x < 1){
        return 'OOPS';
    }

    let arr = [0,1];

    for (let i = 2; i <= x; i++) {
        arr.push(arr[i-2]+arr[i-1]); 
    }

    return arr[x];
};

// Do not edit below this line
module.exports = fibonacci;
