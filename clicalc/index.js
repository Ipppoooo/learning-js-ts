"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
//runs confirmations that the imput is valid and the calculations
function main() {
    //prompts cli input
    const firstStr = (0, readline_sync_1.question)('Enter first number\n');
    const operator = (0, readline_sync_1.question)('Enter Operator\n');
    const secondStr = (0, readline_sync_1.question)('Enter second number:\n');
    const validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) //run operations if input is valid
     {
        const firstNum = parseInt(firstStr);
        const secondNum = parseInt(secondStr);
        const result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else //rerun imput if input form is invalid
     {
        console.log('\ninvalid input\n');
        main();
    }
}
// confirms input is actually a number and returns true or false
function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNum = Boolean((maybeNum));
    return isNum;
}
function isOperator(operator) {
    //confirms that operator is one of below characters
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
main();
