const findTheOldest = function(obj) {
    let max = obj[0];
    obj.forEach(person => {
        if (person.hasOwnProperty('yearOfDeath') === false){
            person.yearOfDeath = new Date().getFullYear();
        }
    });
    for (let i = 1; i < obj.length; i++) {
        if ((obj[i].yearOfDeath-obj[i].yearOfBirth) > (max.yearOfDeath-max.yearOfBirth)) {
            max = obj[i];
        }
        
    }
    return max;
};

// Do not edit below this line
module.exports = findTheOldest;
