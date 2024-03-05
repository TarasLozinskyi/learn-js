// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangle = (a, b) => a * b;


console.log(rectangle(4, 6));
console.log('-------------------------');

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circle =  r => 3.14 * r ** 2;
console.log(circle(20));
console.log('-------------------------');
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinder = (h, r) => 2 * Math.PI * h * r;
console.log(cylinder(20, 10));
console.log('-------------------------');

// - створити функцію яка приймає масив та виводить кожен його елемент

const arr = [1, 2, 3, 4, 5];
const funArr =  arr=> {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
funArr(arr);
console.log('-------------------------');


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const paragraph =  text => console.log(`<p>${text}</p>`);
paragraph('hello');
console.log('-------------------------');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


const funList = (item) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

funList('список');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const funList2 =  (item, value) => {
    document.write('<ul>');
    for (let i = 0; i < value; i++) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}
funList2('список2', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr2 = ['1', '2', '3', '4', '5'];
const funList3 =  (arr) =>{
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}
funList3(arr2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},

];
const funBox = arr => {

    for (let i = 0; i < arr.length; i++) {
        document.write(`<div>${arr[i].age} ${arr[i].name} ${arr[i].id}</div>`);
    }

}
funBox(users);
// - створити функцію яка повертає найменьше число з масиву

let arrNum = [1, 54, 6, 11, -10, 22, 0, -1]
const minNum =  arr =>  {
    let min = arrNum[0];
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement;
        }
    }
    return min;

}
console.log(minNum(arrNum));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sumArr =  arr => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
console.log(sumArr(arrNum));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arrSwap = [11, 22, 33, 44];
const swap = (arr, index, index2) =>{
    let elem = arr[index2];
    arr[index2] = arr[index];
    arr[index] = elem;
    return arr;
}
console.log(swap(arrSwap, 0, 3));//[44, 22, 33, 11];

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let arrExchange = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
const exchange = (sumUAH, currencyValues, exchangeCurrency) =>{
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }

    }
}

console.log(exchange(10000, arrExchange, 'USD'));
console.log(exchange(10000, arrExchange, 'EUR'));












