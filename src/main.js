
const display = document.getElementById('res');

let currentInput = '';
let firstValue = '';
let op = '';

const appendNumber = (number) => {
  currentInput += number;
  display.value = currentInput;
};

const operator = (operator) => {
  if(currentInput === '') return;
  firstValue = currentInput;
  op = operator;
  currentInput = '';
  display.value = firstValue + op;
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
  console.log(display.value)
};

const cleanDisplay = () => {
  display.value = '';
  currentInput = '';
};

const deletNum = () => {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
};