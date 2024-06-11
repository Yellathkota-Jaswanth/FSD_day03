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
   
function findPalindromes(userInput) {
    let u = userInput[0];
    let words = u.split(" ");
    let palindromes = [];

    for (let word of words) {
        let reversedWord = word.split("").reverse().join("");
        if (reversedWord === word) {
            palindromes.push(word);
        }
    }

    return palindromes;
}

// Example usage:
let result = findPalindromes(userInput);
console.log(result); // Output: ["racecar", "level", "eye", "kayak"]


  

});