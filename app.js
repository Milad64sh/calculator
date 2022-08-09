const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const allClearBtn = document.querySelector('[data-all-clear]');
const prevInputTextElement = document.querySelector('[data-prev-operand]');
const currInputTextElement = document.querySelector('[data-curr-operand]');

class Calculator {
  constructor(prevInputTextElement, currInputTextElement) {
    this.prevInputTextElement = prevInputTextElement;
    this.currInputTextElement = currInputTextElement;
    this.clear();
  }

  clear() {
    this.prevOperand = '';
    this.currOperand = '';
    this.operation = undefined;
  }
  delete() {}
  appendNumber(number) {
    if (number === '.' && this.currOperand.includes('.')) return;
    this.currOperand = this.currOperand.toString() + number.toString();
  }
  chooseOperation(operation) {
    if (this.currOperand === '') return;
    if (this.prevOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.prevOperand = this.currOperand;
    this.currOperand = '';
  }
  compute() {
    // let computation;
    // const prev = parseFloat(this.prevOperand);
    // const curr = parseFloat(this.currOperand);
    // if (isNaN(prev) || isNaN(curr)) return;
    // switch (this.operation) {
    //   case '+':
    //     computation = prev + curr;
    //     break;
    //   case '-':
    //     computation = prev - curr;
    //     break;
    //   case '*':
    //     computation = prev * curr;
    //     break;
    //   case '÷':
    //     computation = prev / curr;
    //     break;
    //   default:
    //     return;
    // }
    // this.currentOperand = computation;
    // this.operation = undefined;
    // this.prevOperand = '';
  }
  updateDisplay() {
    this.currInputTextElement.innerText = this.currOperand;
    this.prevInputTextElement.innerText = this.prevOperand;
  }
}
const calculator = new Calculator(prevInputTextElement, currInputTextElement);

numberBtns.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
operationBtns.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});
allClearBtn.addEventListener('click', (button) => {
  calculator.clear();
  calculator.updateDisplay();
});
equalsBtn.addEventListener('click', (button) => {
  calculator.compute();
  calculator.updateDisplay();
});
