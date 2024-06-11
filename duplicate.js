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
    
const uniqueArray = (function() {
    
    const userInput = prompt("Enter elements separated by commas:").split(",").map(Number);
    const unique = [];
    userInput.forEach(function(element) {
        if (unique.indexOf(element) === -1) {
            unique.push(element);
        }
    });
    return unique;
})();

console.log("Unique Array:", uniqueArray);

  

});