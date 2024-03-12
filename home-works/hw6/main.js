// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const arrStr = ['hello world', 'lorem  ipsum', 'javascript is cool'];

const funStr = (arr) => arr.forEach(item => console.log(item.length));
funStr(arrStr);
console.log('------------------------------------')

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const funUpper = (arr) => arr.forEach(item => console.log(item.toUpperCase()));
funUpper(arrStr);
console.log('------------------------------------')
const newArr = arrStr.map(item => item.toUpperCase());
console.log(newArr);
const funLower = (arr) => arr.forEach(item => console.log(item.toLowerCase()));
funLower(newArr);
console.log('------------------------------------')

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '.trim();
console.log(str);
console.log('------------------------------------')

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str2 = 'Ревуть воли як ясла повні';
const arr2 = str2.split(' ');
console.log(arr2);
console.log('------------------------------------')

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const arrNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const newArrStr = arrNum.map(String);
console.log(newArrStr, typeof newArrStr[0]);

console.log('------------------------------------')

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
const funSort = (arr, direction) =>
    console.log(arr.sort((a, b) =>
        direction === "descending" ? b - a : a - b));

funSort(arrNum, "ascending");
funSort(arrNum, "descending");
console.log('------------------------------------')


//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

const newArrSort1 = coursesAndDurationArray
    .sort((a, b) =>
        b.monthDuration - a.monthDuration);
console.log(newArrSort1);
console.log('------------------------------------')

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const arrFilter = coursesAndDurationArray.filter(item => item.monthDuration > 5);
console.log(arrFilter);
console.log('------------------------------------')


//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


const arrMap = coursesAndDurationArray.map((item, index) => {
    return {
        id: index + 1,
        ...item
    }
})

console.log(arrMap);
console.log('------------------------------------')

// описати колоду карт (від 6 до туза без джокерів)

const cards = [
    {cardSuit: 'spades', value: '6', color: 'black'},
    {cardSuit: 'spades', value: '7', color: 'black'},
    {cardSuit: 'spades', value: '8', color: 'black'},
    {cardSuit: 'spades', value: '9', color: 'black'},
    {cardSuit: 'spades', value: '10', color: 'black'},
    {cardSuit: 'spades', value: 'ace', color: 'black'},
    {cardSuit: 'spades', value: 'jack', color: 'black'},
    {cardSuit: 'spades', value: 'queen', color: 'black'},
    {cardSuit: 'spades', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'hearts', value: '6', color: 'red'},
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'ace', color: 'red'},
    {cardSuit: 'hearts', value: 'jack', color: 'red'},
    {cardSuit: 'hearts', value: 'queen', color: 'red'},
    {cardSuit: 'hearts', value: 'king', color: 'red'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'ace', color: 'red'},
    {cardSuit: 'diamonds', value: 'jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'king', color: 'red'},
]

// - знайти піковий туз

const ace = cards.filter(item => item.value === 'ace' && item.cardSuit === 'spades');
console.log(ace);
console.log('------------------------------------')


// - знайти піковий туз
const six = cards.filter(item => item.value === '6')
console.log(six);
console.log('------------------------------------')

//- всі червоні карти

const colorRed = cards.filter(item => item.color === 'red');
console.log(colorRed);
console.log('------------------------------------')
// - всі буби

const diamonds = cards.filter(item => item.cardSuit === 'diamonds');
console.log(diamonds);
console.log('------------------------------------')

// - всі трефи від 9 та більше

const allNumCards = cards.filter(item => item.cardSuit === 'clubs').splice(4);
console.log(allNumCards);
console.log('------------------------------------')

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const funCardSuid = (arr, cardSuid) => {
    return arr.reduce((prev, curr) => {
        if (curr.cardSuit === cardSuid) {
            return prev.push(curr)
        }
        // return prev;
    }, []);
}

console.log(funCardSuid(cards, 'diamonds'))
console.log(funCardSuid(cards, 'hearts'))
console.log(funCardSuid(cards, 'spades'))
console.log(funCardSuid(cards, 'clubs'))

console.log('------------------------------------')

//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//--написати пошук всіх об'єктів, в який в modules є sass

const searchSass = (arr)=>{
    return arr.filter((item)=> item.modules.some(elem=> elem==='sass'
    ));
}
console.log(searchSass(coursesArray));


// --написати пошук всіх об'єктів, в який в modules є docker
const searchDocker = (arr)=>{
    return arr.filter((item)=> item.modules.find(elem=> elem==='docker'
    ));
}


console.log(searchDocker(coursesArray));