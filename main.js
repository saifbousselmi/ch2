function reverseString(str) {
    return str.split("").reverse().join("");
  }
  console.log(reverseString(""));



  function countCharacters(str) {
    return str.length;
  }
  console.log(countCharacters(""));

  function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    let capitalizedSentence = words.join("");
    return capitalizedSentence;
}
console.log(capitalizeWords(""));

function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}
function findMin(arr) {
    if (arr.length === 0) {
        return null;
    }
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    return min;
}
let numbers=[1,8,2,8]
let maxnum=findMax(numbers)
let minnum=findMin(numbers)
console.log(numbers)
console.log(maxnum)
console.log(minnum)



function sumarray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let numbers1 = [1, 2, 3, 4, 5];
let totalSum = sumarray(numbers1);
console.log("Sum:", totalSum);

function filterArray(arr, condition) {
    return arr.filter(condition);
}
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
let evenNumbers = filterArray(numbers2, num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); 
let numbersGreaterThan5 = filterArray(numbers, num => num > 5);
console.log("Numbers Greater Than 5:", numbersGreaterThan5);


function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}
let number = 5;
let factorial = factorialRecursive(number);
console.log(`Factorial of ${number} is:`, factorial);

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
        for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    
    return true; 
}
let num1 = 7;
let num2 = 12;

console.log(`${num1} is prime:`, isPrime(num1)); 
console.log(`${num2} is prime:`, isPrime(num2));

function generateFibonacci(numTerms) {
    let fibonacciSequence = [];
    if (numTerms <= 0) {
        return fibonacciSequence;
    } else if (numTerms === 1) {
        fibonacciSequence.push(0);
        return fibonacciSequence;
    }
    fibonacciSequence.push(0); 
    fibonacciSequence.push(1); 
    for (let i = 2; i < numTerms; i++) {
        let nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextFibonacci);
    }

    return fibonacciSequence;
}
let numTerms = 10;
let fibonacciSequence = generateFibonacci(numTerms);
console.log(`Fibonacci sequence up to ${numTerms} terms:`, fibonacciSequence);