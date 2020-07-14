function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function operate(operator, a, b=null){
    switch (operator){
        case "add":
            return add(a,b);
        case "subtract":
            return subtract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
        case "sqrt":
            return Math.sqrt(a);
        case "square":
            return a ** 2;
        case "mult100":
            return a * 100;
        case "percent":
            return divide(a, 100);
    }
}


//Calculator functions
function AC() {
    displayNumber = "0";
    operand1 = null;
    operand2 = null;
    operator = null;
    displayCalculator();
}
function erase() {
    if (displayNumber === "0") {
        return;
    } else if (displayNumber.length === 1){
        displayNumber = "0";
    } else {
        displayNumber = displayNumber.substring(0, displayNumber.length - 1);
    }
    displayCalculator();
}
function fillNumber(number) {
    if (displayNumber === "0" || displayNumber === NaN){
        displayNumber = number.toString();
    } else {
        displayNumber = displayNumber.concat(number);
    }
    displayCalculator();
}
function displayCalculator() {
    calcDisplay.value = displayNumber;
}

//Processing variables
let displayNumber = "0";
let operand1 = null;
let operand2 = null;
let operator = null;

//Query Selectors
const calcDisplay = document.querySelector("#display-input");
const acButton = document.querySelector("#AC");
const eraseButton = document.querySelector("#erase");
const sqrtButton = document.querySelector("#sqrt");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");
const squareButton = document.querySelector("#square");
const changeSignButton = document.querySelector("chg-sign");
const percentButton = document.querySelector("#percent");
const mult100Button = document.querySelector("#mult100");
const equalsButton = document.querySelector("#equals");
const numberButtons = document.querySelectorAll(".num-button");

//Adding event handlers
acButton.addEventListener("click", () => AC());
eraseButton.addEventListener("click", () => erase());
numberButtons.forEach((button) => {
    button.addEventListener("click", () => fillNumber(button.innerHTML));
});


//Initialize
displayCalculator();