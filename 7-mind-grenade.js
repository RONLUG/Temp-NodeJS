const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`the sum is: ${num1 + num2}`);
}
addValues();
module.exports = addValues;
console.log(module);

//When use require to import module, module that imported will get compile
