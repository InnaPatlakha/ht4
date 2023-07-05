/* Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
Користувач ввів 2 і 2:
2+2=4
2-2=0
2*2=4
2/2=1 */

let firstNumber = parseInt(prompt('enter first number', 100));
let secondNumber = parseInt(prompt('enter second number', 100));
let resultPlus = (firstNumber + secondNumber);
let resultMinus = (firstNumber - secondNumber);
let resultMultiply = (firstNumber * secondNumber);
let resultDivide = (firstNumber / secondNumber);

alert (`${firstNumber} + ${secondNumber} = ${resultPlus}`);
alert (`${firstNumber} - ${secondNumber} = ${resultMinus}`);
alert (`${firstNumber} * ${secondNumber} = ${resultMultiply}`);
alert (`${firstNumber} / ${secondNumber} = ${resultDivide}`);