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
   
     var arr = userInput; // Assuming userInput is the array you want to process

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
}

});