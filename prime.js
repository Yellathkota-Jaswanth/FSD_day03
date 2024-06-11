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
   let arr=userInput[0]
let primeNumbers = [];

for (let num of arr) {
    if (num > 1) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false; // If the number is divisible, it's not prime
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(num);
        }
    }
}

console.log("Prime numbers in the array:", primeNumbers);
});