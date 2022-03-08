// Simple operator functions
// ------------------------------- START -------------------------------
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "error";
    }
    return num1 / num2;
}
// -------------------------------- END --------------------------------

// This function will call the appropriate operator functions depending on the parameter opt.
function operate(opt, num1, num2) {
    if (opt === '+') {
        return add(num1, num2);
    }
    else if (opt === '-') {
        return subtract(num1, num2);
    }
    else if (opt === '*') {
        return multiply(num1, num2);
    }
    else if (opt === '/') {
        return divide(num1, num2);
    }
}

// Required elements
const displayDiv = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const buttonR = document.querySelectorAll(".btnr");
const buttonZ = document.querySelector(".btnz");

// Required variables
let num1;
let num2;
let numString = "";

// Funtion to display numbers on the display when a button is pressed.
function display(evt) {
    if (numString.length > 0 && evt.id == '0') {
        numString += evt.id;
    }
    else if (isNaN(evt.id) != true && evt.id != '0') {
        numString += evt.id;
    }
    else if (evt.id == 'p') {
        numString += '.';
    }
    displayDiv.textContent = numString;
}

// Handling events for buttons
// ------------------------------- START -------------------------------
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display(button);
    });
});

buttonZ.addEventListener('click', () => {
    display(buttonZ);
});
// -------------------------------- END --------------------------------