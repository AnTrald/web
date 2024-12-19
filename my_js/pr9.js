let name = prompt("Введите имя:");
let age = prompt("Введите возраст")
console.log(name);
console.log(age);
const ans = `Здравствуйте, ${name}! Вам ${age} лет.`;
alert(ans);
if (age >= 18) alert("Вы совершеннолетний");
else alert("Вы несовершеннолетний");

let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = prompt("Введите число от 1 до 10");
if (guess == randomNumber) {alert("Вы угадали.")}
else{
    if (guess >= 5) alert("Введенное число не больше 5");
    else alert("Введенное число больше 5");
}

let password = 12345;
let tryPass = prompt("Введите пароль:")
if (tryPass == null) alert("Строка пуста")
else{
    if (tryPass == password) alert("Доступ разрешен")
    else alert("Доступ запрещен")
}

let firstNum = prompt("Введите первое число:")
let secondNum = prompt("Введите второе число:")
let symbol = prompt("Введите оператор('+', '-', '*', '/')")
firstNum = Number(firstNum);
secondNum = Number(secondNum);
switch (symbol) {
    default:
        alert("Неверный оператор")
        break;

    case "+":
        alert(firstNum + secondNum);
        break

    case "-":
        alert(firstNum - secondNum);
        break;

    case "*":
        alert(firstNum * secondNum);
        break;

    case "/":
        if (secondNum === 0) alert("Делить на ноль нельзя")
        else alert(firstNum / secondNum);
        break;
}

for (let i = 1; i < 11; i++) {
    console.log(i)
}
let i = 10
while (i != 0){
    console.log(i--)
}

const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const actices = ['Практика 1', 'Практика 2', 'Практика 3'];
lectures.push('Тема 4')
actices.push('Практика 4')
lectures.forEach((element) => {console.log(element)})
actices.forEach((element) => {console.log(element)})

function f(array){
    let ans = ""
    array.forEach((element) => {ans += element + ", "})
    console.log(ans)
}

lectures_n = ['Основы языка HTML', 'Углубленное изучение HTML', 'Основы работы с CSS',
    'Адаптивная верстка. Flexbox и Grid Layout', 'Bootstrap - работа с фреймворком', 'Основы языка JavaScript',
    'Работа с DOM и событиями в JavaScript', 'Введение в GitHub и GitHub Pages']

f(lectures)
function withO(array){
    let ans = []
    array.forEach((element) => {if (element[0] == "О") ans.push(element)})
    return ans;
}
lectures_withO = withO(lectures_n)
lectures_withO.forEach((element) => {console.log(element)})