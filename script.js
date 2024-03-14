// Get main screen and top screen elements
const mainScreen = document.querySelector("#screen-main");
const topScreen = document.querySelector("#screen-top");
// Get equal and clear buttons
const equalBtn = document.querySelector("#equal-btn");
const cBtn = document.querySelector("#c-button");

// Variables to store numbers, operator, and result
let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";

// Event listener for equal button to perform calculation
equalBtn.onclick = () => operate(operator, firstNum, secondNum);
// Event listener for clear button to reset calculator
cBtn.onclick = () => clear();

// Function to handle number button clicks
function getNumber(num){
    // Check if result is already calculated
    if(result !== ""){
        clear();
    }else if(operator == ""){
        // Check if firstNum is zero and num is zero, prevent multiple zeros
        if(!(firstNum === "0" && num === 0)){
            // Append or set firstNum based on input
            if (firstNum === "0") {
                firstNum = num.toString();
            }else{
                firstNum += num.toString();
            }
            mainScreen.textContent = firstNum;

        }
    }else if(operator !== ""){
        // Append secondNum when operator is selected
        secondNum += num.toString();
        mainScreen.textContent = secondNum;
    }
    
}

// Function to handle operator button clicks
function getOperation(opt){
    // Check if result is already calculated then take result as first number
    if(result !== ""){
        firstNum = result;
        mainScreen.textContent = "0";
        result = "";
        secondNum = "";
    }
    // Set operator and update top screen display
    operator = opt;
    topScreen.textContent = `${firstNum} ${operator}`;
    
}

// Function to add decimal point
function addDecimal() {

    if (operator === "") {

        if (!firstNum.includes(".")) {
            firstNum += ".";
            mainScreen.textContent = firstNum;
        }
    } else {

        if (!secondNum.includes(".")) {
            secondNum += ".";
            mainScreen.textContent = secondNum;
        }
    }
}

// Function to clear/reset calculator
function clear(){
    mainScreen.textContent = "0";
    topScreen.textContent = "0";
    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
}

// Function to delete last character
function deleteNumber() {

    if(mainScreen.textContent == firstNum){
        mainScreen.textContent = firstNum
            .toString()
            .slice(0, -1);
        
        firstNum = mainScreen.textContent;
    }else{
        mainScreen.textContent = secondNum
            .toString()
            .slice(0, -1);
        secondNum = mainScreen.textContent;
    }
}

// Function to perform calculation based on operator
function operate(opt, a, b){
    // Check if operator is missing
    if(opt == ""){
        mainScreen.textContent = "Missing Operator!"
        setTimeout(() => {
            clear();
        },2000)
        
    }
    // Use first number as second number if missing
    if(b == ""){
        b = a;
    }

    // Display operation in top screen
    topScreen.textContent = `${a} ${opt} ${b}`

    // Convert to numbers and perform calculation
    a = Number(a);
    b = Number(b);
    switch(opt){
        case "+":
            add(a,b);
            break;
        case "-":
            subtract(a,b);
            break;
        case "x":
            multiply(a,b);
            break;
        case "÷":
            divide(a,b);
            break;
        case "%":
            remainder(a,b);
            break;
    }


}

// Basic arithmetic operations
function add(a,b){
    result = a + b
    return mainScreen.textContent = result;
}
function subtract(a,b){
    result = a - b;
    return mainScreen.textContent = result;
}

function multiply(a,b){
    result = a * b;
    return mainScreen.textContent = result;
}

function divide(a,b){
    result = a / b;
    return mainScreen.textContent = result;
}

function remainder(a,b){
    result = a % b;
    return mainScreen.textContent = result;
}
