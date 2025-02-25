
const display = document.getElementById('res');

let currentInput = '';
let firstValue = '';
let op = '';

const appendNumber = (number) => {
  currentInput += number;
  display.value = firstValue + op + currentInput;
};

const operator = (operator) => {
  if(currentInput === '') return;
  firstValue = currentInput;
  op = operator;
  display.value = firstValue + op;
  currentInput = '';

};

const calc = () => {
  if(currentInput === '' || firstValue === '' || op === '') return;

  let result;
  let num1 = parseFloat(firstValue);
  let num2 = parseFloat(currentInput);

  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;

    default:
      return;
  }
  
  display.value = result;
  document.getElementById('result').value = firstValue + op + currentInput;
  currentInput = result;
  firstValue = '';
};

const cleanDisplay = () => {
  currentInput = '';
  firstValue = '';
  op = '';
  display.value = '0';
  document.getElementById('result').value = '';
};

const deletNum = () => {
  display.value = display.value.slice(0,-1);
  currentInput = currentInput.slice(0, -1);
};

