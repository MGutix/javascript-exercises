const repeatString = function(word, x) {

    if (x >= 0){

        if(x == 0){
            return ''
        } else {
            let a = word;
            for (let i = 2; i <= x; i++){
                a+= word;
            }
            return a;

        }
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
