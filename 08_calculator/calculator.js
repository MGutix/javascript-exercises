const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(arr) {
	let result = 0;
  arr.forEach(element => {
    result += element;
  });
  return result
};

const multiply = function(arr) {
  let result = 1;
  arr.forEach(element => {
    result *= element;
  });
  return result
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
  let sum = 1;
  if (a != 0){
    for (let i = 1; i <= a; i++) {
      sum *= i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
