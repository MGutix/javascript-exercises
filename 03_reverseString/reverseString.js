const reverseString = function(str) {
    let array = str.split('');
    array = array.reverse();
    let solution = '';
    for (let i = 0; i < str.length; i++){
        solution += array[i];
    }
    return solution;

};

// Do not edit below this line
module.exports = reverseString;
