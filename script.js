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
    currentOp = 1;
    opSwitched = false;
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
    if (opSwitched) {
        displayNumber = number.toString();
        opSwitched = false;
    } else {
        if (displayNumber === "0" || displayNumber === "Not a number"){
            displayNumber = number.toString();
        } else {
            displayNumber = displayNumber.concat(number);
        }
    }
    displayCalculator();
}
function fillDecimal() {
    if (displayNumber.indexOf("\.") === -1) {
        fillNumber(decimalButton.innerHTML);
    } else {
        return;
    }
}

function changeSign() {
    if (displayNumber === "0" || displayNumber === NaN){
        return;
    } else {
        if (displayNumber.indexOf("\-") === 0) {
            displayNumber = displayNumber.substr(1);
        } else {
            displayNumber = "\-" + displayNumber;
        }
        displayCalculator();
    }
}
function switchOp() {
    if (currentOp === 1) {
        currentOp = 2;
    } else {
        currentOp = 1;
    }
    opSwitched = true;
}
function sqrt() {
    if ((displayNumber === "Not a number") || (Number(displayNumber) < 0)) {
        displayNumber = "Not a number";
    } else {
        let sqrtResult = operate("sqrt", Number(displayNumber));
        displayNumber = sqrtResult;
    }
    displayCalculator();
}
function square() {
    if (displayNumber === "Not a number") {
        displayNumber = "Not a number";
    } else {
        let squareResult = operate("square", Number(displayNumber));
        displayNumber = squareResult;
    }
    displayCalculator();
}
function percentage() {
    if (displayNumber === "Not a number") {
        displayNumber = "Not a number";
    } else {
        let percentResult = operate("percent", Number(displayNumber));
        displayNumber = percentResult;
    }
    displayCalculator();
}
function mult100() {
    if (displayNumber === "Not a number") {
        displayNumber = "Not a number";
    } else {
        let mult100Result = operate("mult100", Number(displayNumber));
        displayNumber = mult100Result;
    }
    displayCalculator();
}
function dealWithOperands(pressedOperator) {
    switch (currentOp) {
        case 1:
            operand1 = Number(displayNumber);
            operator = pressedOperator;
            switchOp();
            break;
        case 2:
            evaluate();
            operator = pressedOperator;
            break;
    }
}
function division() {
    dealWithOperands("divide");
}
function multiplication() {
    dealWithOperands("multiply");
}
function subtraction() {
    dealWithOperands("subtract");
}
function addition() {
    dealWithOperands("add");
}
function evaluate() {
    if (currentOp = 2) {
        operand2 = Number(displayNumber);
    }
    if (operand1 !== null && operand2 !== null && operator !== null) {
        let evalResult = operate(operator, operand1, operand2);
        displayNumber = evalResult.toString();
        operand1 = evalResult;
        operand2 = null;
        operator = null;
        opSwitched = true;
    } else {
        return;
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
let currentOp = 1;
let opSwitched = false;

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
const changeSignButton = document.querySelector("#chg-sign");
const percentButton = document.querySelector("#percent");
const mult100Button = document.querySelector("#mult100");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const numberButtons = document.querySelectorAll(".num-button");

//Adding event handlers
acButton.addEventListener("click", () => AC());
eraseButton.addEventListener("click", () => erase());
numberButtons.forEach((button) => {
    button.addEventListener("click", () => fillNumber(button.innerHTML));
});
decimalButton.addEventListener("click", () => fillDecimal());
changeSignButton.addEventListener("click", () => changeSign());
sqrtButton.addEventListener("click", () => sqrt());
divideButton.addEventListener("click", () => division());
multiplyButton.addEventListener("click", () => multiplication());
subtractButton.addEventListener("click", () => subtraction());
addButton.addEventListener("click", () => addition());
squareButton.addEventListener("click", () => square());
percentButton.addEventListener("click", () => percentage());
mult100Button.addEventListener("click", () => mult100());

equalsButton.addEventListener("click", () => evaluate());

//Initialize
displayCalculator();