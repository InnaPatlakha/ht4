/* Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
Користувач ввів 2 і 2:
2+2=4
2-2=0
2*2=4
2/2=1 */

let firstNumber = Number(prompt('enter first number', 100));
let secondNumber = Number(prompt('enter second number', 100));

alert (`
  User entered ${firstNumber} and ${secondNumber}
  ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}
  ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}
  ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}
  ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}
`);