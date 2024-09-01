const sumNumbers = (a, b) => a + b;
const difference = (a, b) => a - b;
const proizvedenie = (a, b) => a * b;
const chastnoe = (a, b) => a / b;

const firstOperand = document.querySelectorAll('.operand');
const operator = document.querySelectorAll('.operator');

let num1 = '';
let num2 = '';
let sign = '';

const operate = (num1, sign, num2) => {
    switch(sign){
        case '+':
            return sumNumbers(num1, num2);
        case '-':
            return difference(num1, num2);
        case '×':
            return proizvedenie(num1, num2)
        case '÷':
            return chastnoe(num1, num2);
    };
};

const display = document.querySelector('.display');
display.textContent = '0';

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    sign = ''
    num2 = ''
    num1 = ''
    display.textContent = '0'
});

firstOperand.forEach(operand => {
    operand.addEventListener('click', (event) => {
        if(!sign){
            num1 += event.target.textContent
            display.textContent = num1
            console.log(num1)
        } else {
            num2 += event.target.textContent
            display.textContent = num2
            console.log(num2)
        }
    })
});

operator.forEach(op => {
    op.addEventListener('click', (event) => {
        if (num1 && !sign) {
            sign = event.target.textContent;
            display.textContent = sign;
        } else if (num1 && sign && num2) {
            num1 = operate(parseFloat(num1), sign, parseFloat(num2));
            sign = event.target.textContent;
            num2 = '';
            display.textContent = sign;
        }
    });
});

const result = document.querySelector('.result');
result.addEventListener('click', () => {
    if (num1 && sign && num2) {
        num1 = operate(parseFloat(num1), sign, parseFloat(num2));
        display.textContent = num1;
        num2 = '';
        sign = '';
    }
});