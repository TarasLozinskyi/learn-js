//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const createUsers = () => {
    const arrUsers = [];
    for (let i = 0; i < 10; i++) {
        arrUsers.push(new User(i + 1, 'vasiy', 'kokosov', 'vasiykokos@gmail.com', '+3801234567'));
    }
    return arrUsers;
}

console.log(createUsers());
console.log('------------------------------------');

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filterUsers = () => {
    return createUsers().filter(item => item.id % 2 === 0);
}
console.log(filterUsers())
console.log('------------------------------------');


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortUsers = () => {
    return createUsers().sort((a, b) => b.id - a.id);
}
console.log(sortUsers());
console.log('------------------------------------');

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phome = phone;
        this.order = order;
    }
}

const clients = [
    new Client(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231', ['apple', 'sandwich', 'malone']),
    new Client(2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231', ['bear', 'sandwich']),
    new Client(3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631', ['apple', 'sandwich']),
    new Client(4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111', ['apple', 'bear', 'sandwich', 'malone']),
    new Client(5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555', ['bear', 'malone']),
    new Client(6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345', ['apple', 'bear', 'malone']),
    new Client(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787', ['apple', 'bear', 'sandwich']),
    new Client(8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777', ['bear', 'sandwich', 'malone']),
];

console.log(clients);
console.log('------------------------------------');

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortClients = (arr) => {
    return arr.sort((a, b) => a.order.length - b.order.length)
}
console.log(sortClients(clients));
console.log('------------------------------------');


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = [];


    this.drive = () => {

        console.log('----------------drive--------------------')
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }


    this.info = () => {
        console.log('----------------info--------------------')
        console.log(`model - ${this.model}`);
        console.log(`producer - ${this.producer}`);
        console.log(`year - ${this.year}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`engineCapacity - ${this.engineCapacity}`);
    }

    this.increaseMaxSpeed = newSpeed => {
        console.log('----------------increaseMaxSpeed--------------------')
        console.log(this.maxSpeed += newSpeed);
    }

    this.changeYear = newValue => {
        console.log('----------------changeYear--------------------')
        console.log(this.year = newValue);
    }


    this.addDriver = function (name, age) {
        console.log('----------------addDriver--------------------')
        this.driver.push(new Driver(name, age));

    }
}

function Driver(name, age) {
    this.name = name;
    this.age = age;
}

let car = new Car('BMW', "kokos", 2020, 300, 3.2);
console.log(car);
car.drive()
car.info()
car.increaseMaxSpeed(120)
car.changeYear(2013);
car.addDriver('Max', 23)
console.log(car);
console.log('-------------- Class---------------------')



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class ClassCar {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = [];
    }

    drive() {
        console.log('----------------drive--------------------')
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }


    info() {
        console.log('----------------info--------------------');
        console.log(`model - ${this.model}`);
        console.log(`producer - ${this.producer}`);
        console.log(`year - ${this.year}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`engineCapacity - ${this.engineCapacity}`);
    }

    increaseMaxSpeed(newSpeed) {
        console.log('----------------increaseMaxSpeed--------------------')
        console.log(this.maxSpeed += newSpeed);
    }

    changeYear(newValue) {
        console.log('----------------changeYear--------------------')
        console.log(this.year = newValue);
    }


    addDriver(name, age) {
        console.log('----------------addDriver--------------------')
        this.driver.push(new Driver(name, age));

    }
}
let classCar = new ClassCar('Volvo', "volvo", 2024, 340, 5.2)
console.log(classCar);
classCar.drive()
classCar.info()
classCar.increaseMaxSpeed(90)
classCar.changeYear(2015);
classCar.addDriver('vasia', 26)
console.log(classCar);
console.log('-----------------------------------')

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const popelArr = [
    new Popelushka('Sabrina', 57, 46),
    new Popelushka('Alina', 22, 36),
    new Popelushka('Tamara', 17, 45),
    new Popelushka('Anna', 17, 37),
    new Popelushka('Inna', 30, 38),
    new Popelushka('Rita', 30, 39),
    new Popelushka('Olga', 17, 39),
    new Popelushka('Irina', 18, 34),
    new Popelushka('Oksana', 25, 35),
    new Popelushka('Tanya', 29, 40),
];
const prince = new Prince('Sergey', 17, 39);
console.log(popelArr.filter(item=> item.footSize === prince.shoe));
console.log(popelArr.find(item=> item.footSize ===prince.shoe));





