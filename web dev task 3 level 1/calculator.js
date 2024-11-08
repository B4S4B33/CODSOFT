let currentInput = ''; // Holds the current input (numbers + operators)
let previousInput = ''; // Holds the previous number
let operator = ''; // Holds the selected operator

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number.toString(); // Add the number to the input string
    document.getElementById('display').value = currentInput; // Update the display
}

// Function to handle operator selection
function chooseOperator(selectedOperator) {
    if (currentInput === '') return; // Do nothing if there's no number input
    if (previousInput !== '') {
        calculateResult(); // If there's a previous number, perform the calculation first
    }
    operator = selectedOperator;
    previousInput = currentInput; // Store the current input as the previous number
    currentInput = ''; // Clear current input for the next number
    document.getElementById('display').value = previousInput + ' ' + operator; // Update display
}

// Function to calculate the result based on the operator
function calculateResult() {
    if (previousInput === '' || currentInput === '') return; // Ensure both inputs exist

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    // Perform the appropriate operation based on the selected operator
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero');
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    // Display the result and clear the operator and previous input for the next operation
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    document.getElementById('display').value = currentInput;
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('display').value = '';
}