// Js app
console.log("Welcome to Data Transmission");
document.getElementById("message").innerHTML = "Message from JavaScript";

// Implementing a Sum Function
function sum(n) {
    if (typeof n !== 'number' || isNaN(n)) return "Invalid input";
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// fct to get input and display sum
function inputSum() {
    let inputNumber = parseInt(document.getElementById("n").value);
    let result = sum(inputNumber);
    document.getElementById("sumResult").innerText = "Sum Result: " + result;
}

// Counter
var counter = 0;

function printValue(divId, value) {
    document.getElementById(divId).innerHTML = value;
}

printValue("counter", 0);

document.getElementById("inc").addEventListener("click", function() {
    counter++;
    printValue("counter", counter);
});

// 2. Decrement button and counter value

var counterLimited = 0;

function updateCounterLimited() {
    document.getElementById("counter-limited").innerText = counterLimited;
}

document.getElementById("inc-limited").addEventListener("click", function() {
    if (counterLimited < 10) {
        counterLimited++;
        updateCounterLimited();
    }
});

document.getElementById("dec-limited").addEventListener("click", function() {
    if (counterLimited > 0) {
        counterLimited--;
        updateCounterLimited();
    }
});

// 3. Sum Function with Input Validation

function validatedSum(n) {
    if (typeof n !== "number" || isNaN(n)) return "not a number";
    let total = 0;
    for (let i = 1; i <= n; i++) total += i;
    return total;
}

function calculateValidatedSum() {
    let input = parseInt(document.getElementById("validated-sum").value);
    document.getElementById("validatedSumResult").innerText = "Result: " + validatedSum(input);
}

//4. Fibonacci

function getFibonacci(n) {
    if (typeof n !== "number" || isNaN(n) || n < 1 || n > 10) return "not allowed";
    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}

function generateFibonacci() {
    let n = parseInt(document.getElementById("fibInput").value);
    document.getElementById("fibResult").innerText = "Result: " + getFibonacci(n);
}

// 5. Simple calculator

function calculate(operation) {
    let num1 = parseFloat(document.getElementById("firstNumber").value);
    let num2 = parseFloat(document.getElementById("secondNumber").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("calcResult").innerText = "Result: Invalid Input";
        return;
    }

    let result;
    switch (operation) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
        case "%": result = num2 !== 0 ? num1 % num2 : "Cannot divide by zero"; break;
    }
    document.getElementById("calcResult").innerText = "Result: " + result;
}

document.getElementById("add").addEventListener("click", () => calculate("+"));
document.getElementById("sub").addEventListener("click", () => calculate("-"));
document.getElementById("mul").addEventListener("click", () => calculate("*"));
document.getElementById("div").addEventListener("click", () => calculate("/"));
document.getElementById("mod").addEventListener("click", () => calculate("%"));