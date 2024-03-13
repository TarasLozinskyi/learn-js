

// //- створити блок,
// const block = document.createElement('div');
// block.innerText = 'block';
//
// // - додати йому класи wrap, collapse, alpha, beta
// block.classList.add('wrap','collapse', 'alpha', 'beta')
//
// //- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// block.style.background = "silver";
// block.style.color = 'green';
// block.style.fontSize = '20px';
//
// //- додати цей блок в body.
// document.body.appendChild(block);
// console.log(block)
//
// //- клонувати його повністю, та додати клон в body.
// const clone = block.cloneNode(true);
// document.body.appendChild(clone);
// clone.style.marginTop = '20px'
// console.log(clone)

//- Є масив:
// ['Main','Products','About us','Contacts']

//---------------------------------------------------------

//
// let arr =['Main','Products','About us','Contacts'];
//
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
// const ul = document.createElement('ul');
// const body = document.body;

// body.appendChild(ul);
//
//
// for (const elem of arr) {
//     const li = document.createElement('li');

//     li.innerText = elem;

//     ul.appendChild(li);
// }

//---------------------------------------------------------

//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let arr = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
// const body = document.body;
// const block = document.createElement('div');

// block.style.background ='grey';
//
// block.innerHTML =`<h2>${arr[0].title}</h2> <p>${arr[0].monthDuration}</p>`

// const block2 = block.cloneNode(true);
// block2.innerHTML =`<h2>${arr[1].title}</h2> <p>${arr[1].monthDuration}</p>`

// const block3 = block.cloneNode(true);
// block3.innerHTML =`<h2>${arr[2].title}</h2> <p>${arr[2].monthDuration}</p>`

// const block4 = block.cloneNode(true);
// block4.innerHTML =`<h2>${arr[3].title}</h2> <p>${arr[3].monthDuration}</p>`

// const block5 = block.cloneNode(true);
// block5.innerHTML =`<h2>${arr[4].title}</h2> <p>${arr[4].monthDuration}</p>`

// const block6 = block.cloneNode(true);
// block6.innerHTML =`<h2>${arr[5].title}</h2> <p>${arr[5].monthDuration}</p>`
//
// body.append( block, block2, block3, block4, block5, block6);


//---------------------------------------------------------
//- Є масив

//
// let arr = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
//
//
//
//
// for (const arrElement of arr) {
//     const h1 = document.createElement('h1');
//     const p = document.createElement('p');
//     const div = document.createElement('div');

//     div.style.background = 'silver';

//     div.classList.add('item');
//     h1.classList.add('heading');
//     p.classList.add('description');

//     h1.innerText = arrElement.title;
//     p.innerText = arrElement.monthDuration;

//     document.body.appendChild(div);

//     div.append(h1, p);
// }

//---------------------------------------------------------

//- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
//
// //Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// // Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
//
// const listSims = document.createElement('div');
// document.body.appendChild(listSims);
//
// for (const item of simpsons) {
//     const member = document.createElement('div');
//     const name = document.createElement('h2');
//     const age = document.createElement('span')
//     const info = document.createElement('p');
//     const photo = document.createElement('img');

//     member.classList.add('member');

//     member.style.width = '500px';

//     listSims.append(member);

//     name.innerText = item.name + ' ' + item.surname;
//     age.innerText = item.age;
//     info.innerText = item.info
//     photo.src = item.photo;

//     member.append(name, age, info, photo);
// }

//---------------------------------------------------------

// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)


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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом


for (const item of coursesArray) {
    const course = document.createElement('div');
    const courseInfo = document.createElement('div');
    const courseModules = document.createElement('div');
    const title = document.createElement('h2');
    const mouth = document.createElement('span');
    const hour = document.createElement('span')
    const modules = document.createElement('ul');

    title.innerText = item.title
    mouth.innerText = item.monthDuration;
    hour.innerText = item.hourDuration;

    course.append(courseInfo, courseModules);
    courseInfo.append(title, mouth, hour);
    courseModules.appendChild(modules);

    for (const elem of item.modules) {
        const moduleItem = document.createElement('li');
        modules.appendChild(moduleItem);
        moduleItem.innerText = elem;
    }

    document.body.appendChild(course);

}
