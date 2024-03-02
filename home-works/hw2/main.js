// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 4, 'a', 'b', true, false, [111, 222], [], {name: 'Mary'}]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log('---------------------------------------')


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//     title: 'Кобзар',
//     pageCount: 400,
//     genre: 'поезія'
// }
//
// let book2 = {
//     title: 'Звіяні Вітром',
//     pageCount: 400,
//     genre: 'роман'
// }
//
// let book3 = {
//     title: 'Щоденник Анни Франк',
//     pageCount: 400,
//     genre: 'біографічний роман'
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'Кобзар',
    pageCount: 400,
    genre: 'поезія',
    authors: [{
        name: 'Тарас',
        age: 40,
    }]
};


let book2 = {
    title: 'Звіяні Вітром',
    pageCount: 400,
    genre: 'роман',
    authors: [{
        name: 'Маргарет',
        age: 30,
    }]
}

let book3 = {
    title: 'Щоденник Анни Франк',
    pageCount: 400,
    genre: 'біографічний роман',
    authors: [{
        name: 'Анна',
        age: 20,
    }]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {
        name: 'Василь',
        username: 'Вас',
        password: 1234
    },
    {
        name: 'Андрій',
        username: 'Андр',
        password: 1111
    },
    {
        name: 'Тарас',
        username: 'тар',
        password: 2222
    },
    {
        name: 'Марія',
        username: 'марі',
        password: 3333
    },
    {
        name: 'Галина',
        username: 'Галя',
        password: 4444
    },
    {
        name: 'Світлана',
        username: 'Света',
        password: 5555
    },
    {
        name: 'Ольга',
        username: 'Оля',
        password: 6666
    },
    {
        name: 'Ірина',
        username: 'Iра',
        password: 7777
    },
    {
        name: 'Микола',
        username: 'Коля',
        password: 8888
    },
    {
        name: 'Роман',
        username: 'Рома',
        password: 9999
    },
]

console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);
console.log('-------------------------------------------')


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 10;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

console.log('-------------------------------------------------------')


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 54;
if (time >= 0 && time < 15) {
    console.log('Перша');
} else if (time >= 15 && time < 30) {
    console.log('Друга');
} else if (time >= 30 && time < 45) {
    console.log('Третья');
} else if (time >= 45 && time < 60) {
    console.log('Четверта');
} else {
    console.log('Помилка');
}
console.log('-------------------------------------------------')


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 2;

if (day > 0 && day <= 10) {
    console.log('Перша');
} else if (day > 10 && day <= 20) {
    console.log('Друга');
} else if (day > 20 && day <= 31) {
    console.log('Третья');
} else {
    console.log('Помилка');
}

console.log('-----------------------------------------------')
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let days = +prompt('Введішь день', '1');

switch (days) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Fridays');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Error');
}

console.log('-----------------------------------------------')

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('Введіть перше число',);
let number2 = +prompt('Введіть друге число');

if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else if (number1 === number2) {
    console.log('Числа рівні');
} else {
    console.log('Помилка');
}

console.log('--------------------------------------------');    


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let xxx;
xxx = xxx || 'default';
console.log(xxx);
console.log('----------------------------------------------');

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер!');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер!');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер!');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер!');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер!');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер!');
}
