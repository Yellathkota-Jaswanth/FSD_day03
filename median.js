// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
   
const findMedianAnonymous = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    const length = sortedArray.length;
    const midIndex = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2;
    } else {
        return sortedArray[midIndex];
    }
};

// Example usage:
var arr1 = userInput[0];
var arr2 = userInput[0];
const median = findMedianAnonymous(arr1, arr2);
console.log("Median:", median);

  

});