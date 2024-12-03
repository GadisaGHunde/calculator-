// Calculator logic
let currentInput = '';
let previousInput = '';
let operation = null;

// Function to append numbers to the display
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// Function to set the operation
function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

// Function to calculate the result
function calculate() {
  if (previousInput === '' || currentInput === '' || operation === null) return;

  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  let result;

  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = curr !== 0 ? prev / curr : 'Error';
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = '';
  updateDisplay();
}

// Function to clear the display and reset variables
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay();
}

// Function to update the display
function updateDisplay() {
  const display = document.getElementById('display');
  display.value = currentInput || '0';
}