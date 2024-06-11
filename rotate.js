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
    
    a=userInput[0];
    k=userInput[0];
 const n = a.length;
const rotations = k % n;
const rotated = a.slice(rotations).concat(a.slice(0, rotations));
console.log("Rotated Array:", rotated);
  

});