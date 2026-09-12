const display = document.getElementById('display');
let currentInput = '0';
let shouldResetDisplay = false;

function updateDisplay() {
  display.innerText = currentInput;
}
function appendNum(num) {
  if (currentInput === '0' || shouldResetDisplay) {
    currentInput = num;
    shouldResetDisplay = false;
  } else {
    currentInput += num;
  }
  updateDisplay();
}
function appendOperator(operator) {
    if (shouldResetDisplay) shouldResetDisplay = false;
  const lastChar = currentInput.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator
  }
updateDisplay();
}
function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}
function backspace() {
  if (currentInput.length === 1 || (currentInput.length === 2 && currentInput.startsWith('-'))) {
    currentInput = '0';
  } else {
    currentInput = currentInput.slice(0, -1);
  }
  updateDisplay();
}
function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = 'Error';
  }
  shouldResetDisplay = true;
  updateDisplay();
}
function toggleSign() {
  if (currentInput !== '0' && currentInput !== 'Error') {
    if (currentInput.startsWith('-')) {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = '-' + currentInput;
    }
    updateDisplay();
}
}
function square() {
  try {
    let val = eval(currentInput);
    currentInput = (val * val).toString();
    shouldResetDisplay = true;
    updateDisplay();
  } catch {
    currentInput = 'Error';
    updateDisplay();
  }
}
function sqrt() {
  try {
    let val = eval(currentInput);
    currentInput = Math.sqrt(val).toString();
    shouldResetDisplay = true;
    updateDisplay();
  } catch {
    currentInput = 'Error';
    updateDisplay();
  }
}
function reciprocal() {
  try {
    let val = eval(currentInput);
    currentInput = (1 / val).toString();
    shouldResetDisplay = true;
    updateDisplay();
  } catch {
    currentInput = 'Error';
    updateDisplay();
  }
}

function percentage() {
  try {
    let val = eval(currentInput);
    currentInput = (val / 100).toString();
    shouldResetDisplay = true;
    updateDisplay();
  } catch {
    currentInput = 'Error';
    updateDisplay();
  }
}