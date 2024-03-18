// This converts string to Number
const stringToNumber = function(str) {
    return Number(str);
  }
const stringToNumberr = function(str) {
    return +(str);
  }

  let stringValue = "123";
let numberValue = parseInt(stringValue, 10); // The second argument is the radix. For decimal numbers, it's 10.
console.log(numberValue); // Output: 123


//   This converts number to a string
const numberToString = function(num) {
    return num.toString();
};

const numberToStringg = function(num) {
    return `${num}`;
  }; //You can also use template literal
  

 