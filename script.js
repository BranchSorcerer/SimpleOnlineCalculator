const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let currentOperator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value >= '0' && value <= '9' || value === '.') {
            currentInput += value;
            updateDisplay();
        } else if (value === 'C') {
            clear();
        } else if (value === '=') {
            calculate();
        } else {
            handleOperator(value);
        }
    });
});

function updateDisplay() {
    result.value = currentInput;
}

function clear() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    updateDisplay();
}

function calculate() {
    if (currentOperator && previousInput && currentInput) {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        let calculatedResult;

        switch (currentOperator) {
            case '+':
                calculatedResult = num1 + num2;
                break;
            case '-':
                calculatedResult = num1 - num2;
                break;
            case '*':
                calculatedResult = num1 * num2;
                break;
            case '/':
                calculatedResult = num1 / num2;
                break;
        }

        currentInput = calculatedResult.toString();
        currentOperator = '';
        previousInput = '';
        updateDisplay();
    }
}

function handleOperator(operator) {
    if (currentInput) {
        if (previousInput && currentOperator) {
            calculate();
        }
        previousInput = currentInput;
        currentInput = '';
        currentOperator = operator;
    }
}