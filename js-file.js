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
        if (num2 == 0) {
            return 'error';
        }
        return divide(num1, num2).toFixed(2);
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
let opt;
let numString = "";

// Funtion to display numbers on the display when a button is pressed.
function display(evt) {

    // If the evt.id is a numerical value then numString will concatenate the number
    // unless it starts with 0.
    if (isNaN(evt.id) != true) {
        if (numString[0] != '0'){
            numString += evt.id;
        }
    }

    // If the evt.id is p, numString will concatenate '.'
    else if (evt.id === 'p') {
        numString += '.';
    }

    // If the evt.id is either one of the operations, the variable 'opt' will take the evt.id as a value.
    // The variable num1 will take the numString as its value.
    // numString will be empty again to take another value.
    else if (evt.id === '+' || evt.id === '-' || evt.id === '*' || evt.id === '/') {
        opt = evt.id;
        num1 = parseFloat(numString);
        numString = '';
    }

    // Clear the display
    else if (evt.id === 'c') {
        numString = '';
    }

    // Remove the last number
    else if (evt.id === 'b') {
        numString = numString.replace(numString[numString.length - 1], '');
    }

    // Make a number negative or positive
    else if (evt.id === 'pm') {
        if (numString.length === 0 || numString[0] != '-') {
            numString = '-' + numString;
        }
        else if (numString[0] === '-') {
            numString = numString.replace(numString[0], '');
        }
    }

    // If evt.id is '=', num2 will take the numString as its value.
    // opreate() function will be invoked.
    // num1 will take numString, answer, as its value.
    else if (evt.id === '=') {
        num2 = parseFloat(numString);
        if (num1 && num2 || num1 === 0 && num2) {
            numString = operate(opt, num1, num2);
            numString = numString.toString();
            num1 = parseFloat(numString);
        }
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

buttonR.forEach((button) => {
    button.addEventListener('click', () => {
        display(button);
    });
});
// -------------------------------- END --------------------------------