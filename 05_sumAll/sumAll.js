const sumAll = function(s,e) {
    let count= s;
    if(typeof s !== 'number' || typeof e !== 'number' || typeof s === 'number' && s < 0 || typeof e === 'number' && e < 0){
        return 'ERROR'
    } else {
        while (s != e){
            if (s <= e){
                s++;
                count+=s;
                console.log(count)
            } else if (s >= e){
                s--;
                count+=s;
            }
        }
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
