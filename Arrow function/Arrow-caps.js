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
    
   const stringArray = ["hello", "world", "javascript", "programming"];

const titleCapsArray = stringArray.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
});

console.log(titleCapsArray);


});