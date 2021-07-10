"use strict";

//Задание 1
let a = 1,
    b = 1,
    c, d;
//Префиксный инкремент увеличит значение переменной а на 1 и возвратит новое значение (a=2)
c = ++a;
alert(c);
//Постфиксный инкремент увеличивает значение переменной b (было b=1) на 1 (станет b=2), но возвращает старое значение (b=1)
d = b++;
alert(d);

// Префиксный инкремент увеличивает значение переменной a (было a=2) ещё на 1 (станет а=3), а затем складывается с 2 (2+3=5)
c = 2 + ++a;
alert(c);
//Постфиксный инкремент увеличит переменную b на 1 (b=3), но вернет старое значение (b=2), поэтому 2 + 2 = 4
d = 2 + b++;
alert(d);

alert(a);
alert(b);

//Задание 2
a = 2;
//Оператор (*=) умножает переменную на значение правого операнда (получаем a=4), а затем складываем результат с 1 (1+4=5)
let x = 1 + (a *= 2);

//Задание 3 
a = 6,
    b = 0;
if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}

//Задание 4

function sum(x, y) {
    let result = x + y;
    return result;
}

function minus(x, y) {
    let result = x - y;
    return result;
}

function multi(x, y) {
    let result = x * y;
    return result;
}

function division(x, y) {
    let result = x / y;
    return result;
}

sum(10, -15);
minus(10, -15);
multi(10, -15);
division(15, 10);

//Задание 5

function mathOperation(arg1, arg2, operation) {
    let result;
    switch (operation) {
        case "sum":
            result = sum(arg1, arg2);
            break;
        case "minus":
            result = minus(arg1, arg2);
            break;
        case "multi":
            result = multi(arg1, arg2);
            break;
        case "division":
            result = division(arg1, arg2);
            break;
        default:
            console.log("Неизвестная операция");
    }
    return result;
}

mathOperation(10, 2, "sum");
mathOperation(-20, -50, "minus");
mathOperation(13, 2, "multi");
mathOperation(10, 2, "division");

//Задание 6
let number = +prompt("Введите число: ", '');
let str = String(number);
let lastSymbol = str[str.length - 1];

switch (lastSymbol) {
    case "1":
        if (str.length == 2 && str[0] == "1") {
            console.log(`Ваша сумма в ${number} рублей успешно зачислена.`);
        } else {
            console.log(`Ваша сумма в ${number} рубль успешно зачислена.`);
        }
        break;
    case "2":
    case "3":
    case "4":
        if (str.length >= 2 && str[str.length - 2] == "1") {
            console.log(`Ваша сумма в ${number} рублей успешно зачислена.`);
        } else {
            console.log(`Ваша сумма в ${number} рубля успешно зачислена.`);
        }
        break;
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
        console.log(`Ваша сумма в ${number} рублей успешно зачислена.`);
        break;
}