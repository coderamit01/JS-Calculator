

const buttons = document.querySelectorAll('.calculator-btn');
let string = '';
let calculate = document.getElementById('calculate');
let result = document.getElementById('res');
const arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if( e.target.innerHTML == '='){
      calculate.value = string;
      string = eval(string);
      result.value = string;
    }else if(e.target.innerHTML == 'AC') {
      string = '';
      result.value = string;
      calculate.value = '';
    }else if(e.target.innerHTML == 'X') {
      const resArr = string.slice(0, -1);
      string = resArr;
      result.value = string;
    }
    else{
      string += e.target.innerHTML;
      result.value = string;
    }
    
  })
})
