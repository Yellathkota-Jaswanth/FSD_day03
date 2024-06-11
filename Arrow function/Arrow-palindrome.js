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
 
const words = ["level", "noon", "hello", "radar", "world"];

const isPalindrome = (word) => {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
};

const palindromeArray = words.filter((word) => isPalindrome(word));

console.log("Palindromes:", palindromeArray);



});