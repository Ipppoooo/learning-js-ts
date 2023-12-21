import { question } from "readline-sync";
// confirms that these symbols onkly are type Operator
type Operator = '+' | '-' | '*' | '/' ;

//runs confirmations that the imput is valid and the calculations
function main(): void
{
    //prompts cli input
    const firstStr: string = question('Enter first number\n');
    const operator: string = question('Enter Operator\n');
    const secondStr: string = question('Enter second number:\n');

    const validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    
    if (validInput) //run operations if input is valid
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(result);
    }
    else //rerun imput if input form is invalid
    {
        console.log('\ninvalid input\n');
        main();
    }
    
}

// confirms input is actually a number and returns true or false
function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = Boolean((maybeNum));
    return isNum;
}
function isOperator(operator: string): boolean
{
    //confirms that operator is one of below characters
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function calculate(firstNum: number, operator: Operator , secondNum: number) //calculate
{
    switch(operator)
    {
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