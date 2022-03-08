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