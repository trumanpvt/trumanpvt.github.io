'use strict';

// function getLast(obj) {
//     return obj[obj.length - 1];
// }

// function addLast(obj, item) {
//     obj.push(item);
// }

// // var styles = ['Джаз', 'Блюз'];

// // console.log(styles);

// // styles[styles.length] = 'Рок-н-Ролл';

// // console.log(styles);

// // styles[styles.length - 2] = 'Классика';

// // console.log(styles);

// // alert(styles.shift());

// // console.log(styles);

// // styles.unshift('Рэп', 'Регги');

// // console.log(styles);

// function getRandElem(obj) {
//     var rand = Math.floor(Math.random() * obj.length);
//     return obj[rand];

// }

// function getArray() {
//     var array = [];

//     while (true) {

//         var value = prompt('Введите число', 0);

//         if (value === '' || value === null || isNaN(value)) break;

//         array.push(+value);

//     }

//     return array;

// }

// function sumOfArray(array) {

//     var sum = 0;

//     for (var i = 0; i < array.length; i++) {

//         sum += array[i];
//     }

//     return sum;
// }

// // console.log(sumOfArray(getArray()));

// if ([].indexOf) {

//     var find = function(array, value) {
//         return array.indexOf(value);
//     }

// } else {
//     var find = function(array, value) {
//         for (var i = 0; i < array.length; i++) {
//             if (array[i] === value) return i;
//         }

//         return -1;
//     }

// }

// function filterRange(arr, a, b) {

//     var newArr = [];

//     for (var i = 0; i < arr.length; i++) {
//         if ((arr[i] >= a) && (arr[i] <= b)) newArr.push(arr[i]);
//     }

//     return newArr;
// }

// var arr = [5, 4, 3, 8, 0];

// // console.log(filterRange(arr, 3, 5));

// function findPrimes(n) {

//     var arr = [];

//     for (var i = 2; i <= n; i++) {

//         arr[i] = true;
//     }

//     var p = 2;

//     do {

//         for (i = 2 * p; i < n; i += p) {
//             arr[i] = false;
//         }

//         for (i = p + 1; i < n; i++) {

//             if (arr[i]) break;
//         }

//         p = i;
//     } while (p * p < n);

//     var sum = 0;

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// function getMaxSubSum(arr) {

//     var maxSum = 0,
//         partialSum = 0;

//     for (i = 0; i < arr.length; i++) {

//         partialSum += arr[i];
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0;
//     }

//     return maxSum;
// }

// // arr = [-1, -2, -3, -4, 9, 6, -100];

// // console.log(getMaxSubSum(arr));

// var obj = {
//     className: 'open menu'
// }

// function addClass(obj, cls) {

//     var classes = obj.className ? obj.className.split(' ') : [];

//     for (var i = 0; i < classes.length; i++) {
//         if (classes[i] == cls) return;
//     }

//     classes.push(cls);

//     obj.className = classes.join(' ');
// }

// // addClass(obj, 'new'); // obj.className='open menu new'
// // addClass(obj, 'open'); // без изменений (класс уже существует)
// // addClass(obj, 'me'); // obj.className='open menu new me'

// // alert(obj.className); // "open menu new me"

// function camelize(str) {

//     var newStr = str.split('-');

//     for (i = 1; i < newStr.length; i++) {

//         newStr[i] = newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1);
//     }

//     return newStr.join('');
// }

// // console.log(camelize('list-style-image'));


// function removeClass(obj, cls) {

//     var classes = obj.className.split(' ');

//     for (var i = 0; i < classes.length; i++) {
//         if (classes[i] == cls) classes[i] = '';
//     }

//     // for (var i = 0; i < classes.length; i++) {
//     //   if (classes[i] == cls) {
//     //     classes.splice(i, 1); // удалить класс
//     //     i--; // (*)
//     //   }
//     // }

//     obj.className = classes.join('');
// }

// // obj = {
// //     className: 'my menu menu'
// // };
// // removeClass(obj, 'menu');
// // alert(obj.className); // 'my'

// function filterRangeInPlace(arr, a, b) {

//     for (var i = 0; i < arr.length; i++) {

//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i--, 1);
//         }
//     }
// }

// // var arr = [5, 3, 8, 432, 3.4, 1];

// // filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// // alert( arr );

// function compareReversed(a, b) {

//     return b - a;
// }

// // var arr = [5, 2, 1, -10, 8];

// // // отсортируйте?
// // arr.sort(compareReversed);
// // alert( arr ); // 8, 5, 2, 1, -10

// // var arr = ["HTML", "JavaScript", "CSS"];

// // var arrSorted = arr.slice().sort();

// // alert( arrSorted ); // CSS, HTML, JavaScript
// // alert( arr ); // HTML, JavaScript, CSS (без изменений)

// // function compareRandom(a, b) {
// //   return Math.random() - 0.5;
// // }

// // var arr = [1, 2, 3, 4, 5];

// // arr.sort(compareRandom);

// // alert( arr );

// // var vasya = { name: "Вася", age: 23 };
// // var masha = { name: "Маша", age: 18 };
// // var vovochka = { name: "Вовочка", age: 6 };

// // var people = [ vasya , masha , vovochka ];

// // function compareAge(personA, personB) {

// //   return personA.age - personB.age;
// // }

// // people.sort(compareAge);

// // for(var i = 0; i < people.length; i++) {
// //   alert(people[i].name); // Вовочка Маша Вася
// // }

// var list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };

// // function printList(list) {

// //   var tmp = list;

// //   while (tmp) {
// //     console.log(tmp.value);
// //     tmp = tmp.next;
// //   }
// // }

// // function printReverseList(list) {

// //   if (list.next) {
// //     printReverseList(list.next);
// //   }

// //   alert( list.value );
// // }

// function printReverseList(list) {

//     var arr = [];
//     var tmp = list;

//     while (tmp) {

//         arr.push(tmp.value);
//         tmp = tmp.next;
//     }

//     for (var i = arr.length - 1; i >= 0; i--) {
//         alert(arr[i]);
//     }
// }

// // printReverseList(list);

// function aclean(arr) {

//     var obj = {};

//     for (var i = 0; i < arr.length; i++) {
//         var sorted = arr[i].toLowerCase().split('').sort().join('');

//         obj[sorted] = arr[i];
//     }

//     var result = [];

//     // теперь в obj находится для каждого ключа ровно одно значение
//     for (var key in obj) result.push(obj[key]);

//     return result;
// }

// // var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

// // alert( aclean(arr) );

// // function unique(arr) {

// //     var arr2 = arr.slice();

// //     for (var i = 0; i < arr2.length; i++) {
// //         for (var j = i + 1; j < arr2.length; j++) {
// //             if (arr2[i] == arr2[j]) arr2.splice(j--, 1);
// //         }
// //     }


// //     return arr2;
// // }


// function unique(arr) {
//     var obj = {};

//     for (var i = 0; i < arr.length; i++) {
//         var str = arr[i];
//         obj[str] = true; // запомнить строку в виде свойства объекта
//     }

//     return Object.keys(obj); // или собрать ключи перебором для IE8-
// }

// var strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", "8-()"
// ];

// // alert(unique(strings)); // кришна, харе, 8-()



// // убрали 0 в конце
// var result = arr.reduce(function(sum, current) {
//     return sum + current
// }, 2);



// var arrLength = arr.map(function(name) {
//     return name.length;
// });

// // alert(arrLength); // 4,5,2,5

// function getSums(arr) {

//     if (!arr.length) return [];
//     var arrSums = [];
//     var totalSum = arr.reduce(function(sum, current) {
//         arrSums.push(sum);
//         return sum + current;
//     })
//     arrSums.push(totalSum);

//     return arrSums;
// }

// // alert(getSums([1, 2, 3, 4, 5])); // 1,3,6,10,15
// // alert(getSums([-2, -1, 0, 1]));

// function testArguments() {

//     var args = [];
//     for (var i = 0; i < arguments.length; i++) {
//         args[i] = arguments[i];
//     }

//     return args;
// }

// // console.log(testArguments(1, 2, 3));

// function copy() {
//     var dst = arguments[0];

//     for (var i = 1; i < arguments.length; i++) {
//         var arg = arguments[i];
//         for (var key in arg) {
//             dst[key] = arg[key];
//         }
//     }

//     return dst;
// }

// var vasya = {
//     age: 21,
//     name: 'Вася',
//     surname: 'Петров'
// };

// var user = {
//     isAdmin: false,
//     isEmailConfirmed: true
// };

// var student = {
//     university: 'My university'
// };


// // console.log(copy(vasya, user, student));

// function f(x) {
//     console.log(arguments.length ? 1 : 0);
// }

// // f(undefined);
// // f();

// function sum() {

//     var result = 0;

//     for (var i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }

//     return result;
// }

// // console.log(sum(1, 2, 3, 4));

// // var arr = [];
// // for (var i = 0; i < 1000; i++) arr[i] = 0;

// // function walkIn(arr) {
// //   for (var key in arr) arr[key]++;
// // }

// // function walkLength(arr) {
// //   for (var i = 0; i < arr.length; i++) arr[i]++;
// // }

// // function bench(f) {
// //   var date = new Date();
// //   for (var i = 0; i < 10000; i++) f(arr);
// //   return new Date() - date;
// // }

// // alert( 'Время walkIn: ' + bench(walkIn) + 'мс' );
// // alert( 'Время walkLength: ' + bench(walkLength) + 'мс' );

// // var arr = [];
// // for (var i = 0; i < 1000; i++) arr[i] = 0;

// // function walkIn(arr) {
// //   for (var key in arr) arr[key]++;
// // }

// // function walkLength(arr) {
// //   for (var i = 0; i < arr.length; i++) arr[i]++;
// // }

// // function bench(f) {
// //   var date = new Date();
// //   for (var i = 0; i < 1000; i++) f(arr);
// //   return new Date() - date;
// // }

// // // bench для каждого теста запустим много раз, чередуя
// // var timeIn = 0,
// //   timeLength = 0;
// // for (var i = 0; i < 100; i++) {
// //   timeIn += bench(walkIn);
// //   timeLength += bench(walkLength);
// // }

// // alert( 'Время walkIn: ' + timeIn + 'мс' );
// // alert( 'Время walkLength: ' + timeLength + 'мс' );


// // var arr = [];
// // for (var i = 0; i < 1000; i++) arr[i] = 0;

// // function walkIn(arr) {
// //   for (var key in arr) arr[key]++;
// // }

// // function walkLength(arr) {
// //   for (var i = 0; i < arr.length; i++) arr[i]++;
// // }

// // function bench(f) {
// //   for (var i = 0; i < 10000; i++) f(arr);
// // }

// // console.time("All Benchmarks");

// // console.time("walkIn");
// // bench(walkIn);
// // console.timeEnd("walkIn");

// // console.time("walkLength");
// // bench(walkLength);
// // console.timeEnd("walkLength");

// // console.timeEnd("All Benchmarks");

// var date = new Date();

// var options = {
//     era: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     weekday: 'long',
//     timezone: 'UTC',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
// };


// // console.log(date.toLocaleString("ru", options));

// // console.log(date.toLocaleString("en-US", options));

// // console.log( date.toString() );

// // console.log( date.toUTCString() );

// // console.log( date.toISOString() );

// // console.log( date.toDateString() );

// // console.log( date.toTimeString() );

// // var ms = Date.parse("January 26, 2011 13:51:50");

// // alert( ms );

// // console.log(Date.now());

// // console.log(new Date(2012, 1, 20, 3, 12));

// function getWeekDay(date) {

//     var week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

//     return week[date.getDay()];
// }

// // var date = new Date(2012,0,3);
// // console.log( getWeekDay(date) ); 
// // alert( date.toLocaleString('ru', {weekday: 'short'}) );

// function getLocalDay(date) {

//     var day = date.getDay();

//     if (day == 0) day = 7;

//     return day;
//     // return date.getDay().toLocaleString('eu', {weekday: 'numeric'});
// }


// // var date = new Date(2012, 0, 2);  // 3 янв 2012
// // alert( getLocalDay(date) ); 

// function getDateAgo(date, days) {

//     var newDate = new Date(date);

//     newDate.setDate(newDate.getDate() - days);

//     return newDate;
// }

// // alert( getDateAgo(date, 300) );

// function getLastDayOfMonth(year, month) {

//     var newDate = new Date(year, month + 1, 0);

//     return newDate;
// }

// // alert( getLastDayOfMonth(2012, 1) );

// function getSecondsToday() {

//     var currentDate = new Date();
//     var pastDate = new Date(currentDate);
//     pastDate.setHours(0, 0, 0, 0);

//     return Math.floor((currentDate - pastDate) / 1000);
// }

// // function getSecondsToday() {
// //   var now = new Date();

// //   // создать объект из текущей даты, без часов-минут-секунд
// //   var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

// //   var diff = now - today; // разница в миллисекундах
// //   return Math.floor(diff / 1000); // перевести в секунды
// // }

// // console.log(getSecondsToday());

// function getSecondsToTomorrow() {

//     var currentDate = new Date();
//     var futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);

//     return Math.floor((futureDate - currentDate) / 1000);
// }

// // console.log(getSecondsToTomorrow());

// function formatDate(date) {

//     var newDate = new Date(date);

//     return newDate.toLocaleString('ru', { year: '2-digit', month: '2-digit', day: '2-digit' });
// }

// // var d = new Date(2014, 0, 30); // 30 января 2014
// // alert( formatDate(d) ); // '30.01.14'

// function formatDate(date) {

//     var diff = (new Date() - date) / 1000;

//     if (diff < 0) return "It`s Future!";

//     if (diff >= 0 && diff < 1) return 'только что';

//     if (diff < 60) return diff + " сек. назад";

//     if (diff < 3600) return Math.floor(diff / 60) + " мин. назад";

//     return new Date(date).toLocaleString('ru', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });

// }

// // alert( formatDate(new Date(2019, 0, 30)) );

// if ("a" in window) {
//     var a = 1;
// }
// // alert( a );

// function makeCounter() {
//     var currentCount = 1;

//     return function() { // (**)
//         return currentCount++;
//     };
// }

// // var counter = makeCounter(); // (*)

// // // каждый вызов увеличивает счётчик и возвращает результат
// // console.log( counter() ); // 1
// // console.log( counter() ); // 2
// // console.log( counter() ); // 3

// // // создать другой счётчик, он будет независим от первого
// // var counter2 = makeCounter();
// // console.log( counter2() ); // 1

// function makeCounter() {
//     function counter() {
//         return counter.currentCount++;
//     };
//     counter.currentCount = 1;

//     return counter;
// }

// // var counter = makeCounter();
// // alert( counter() ); // 1
// // alert( counter() ); // 2



// function makeCounter() {

//     var currentCount = 1;

//     return function() {
//         return currentCount++;
//     };
// }

// // var counter = makeCounter();
// // var counter2 = makeCounter();

// // alert( counter() ); // 1
// // alert( counter() ); // 2

// // alert( counter2() ); // 3
// // alert( counter2() ); // 4

// var b = 3;

// function test() {
//     var a = 2;
//     var umn = new Function('a', ' return a*a; ');
//     return umn(b);
// }

// // alert(test());

// function makeCounter() {
//     var currentCount = 1;

//     // возвращаемся к функции
//     function counter() {
//         return currentCount++;
//     }

//     // ...и добавляем ей методы!
//     counter.set = function(value) {
//         currentCount = value;
//     };

//     counter.reset = function() {
//         currentCount = 1;
//     };

//     return counter;
// }

// // var counter = makeCounter();

// // alert( counter() ); // 1
// // alert( counter() ); // 2

// // counter.set(5);
// // alert( counter() ); // 5
// // alert(counter.set);

// function sum(a) {

//     return function(b) {
//         return a + b;
//     }

// }

// // alert( sum(1)(2) );
// // alert( sum(5)(-1) );

// function makeBuffer() {

//     var temp = '';

//     function buffer(a) {
//         // if (a != undefined) {
//         //     temp += a;
//         // }
//         // return temp;
//         if (arguments.length == 0) {
//             return temp;
//         }

//         temp += a;
//     }

//     buffer.clear = function() {
//         temp = '';
//     }

//     return buffer;

// }


// // var buffer = makeBuffer();

// // buffer("Тест");
// // buffer(" тебя не съест ");
// // alert( buffer() ); // Тест тебя не съест

// // buffer.clear();

// // alert( buffer() );

// function byField(field) {

//     return function(a, b) {
//         return a[field] > b[field] ? 1 : -1;
//     }
// }

// var users = [{
//     name: "Вася",
//     surname: 'Иванов',
//     age: 20
// }, {
//     name: "Петя",
//     surname: 'Чапаев',
//     age: 25
// }, {
//     name: "Маша",
//     surname: 'Медведева',
//     age: 18
// }];


// // users.sort(byField('name'));
// // users.forEach(function(user) {
// //   alert( user.name );
// // });

// // users.sort(byField('age'));
// // users.forEach(function(user) {
// //   alert( user.name );
// // });

// function filter(arr, func) {

//     var newArr = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (func(arr[i])) newArr.push(arr[i]);
//     }

//     return newArr;
// }

// function inBetween(a, b) {

//     return function(x) {
//         return x >= a && x <= b;
//     };
// }

// function inArray(arr) {

//     return function(x) {
//         return arr.indexOf(x) != -1;
//     };
// }

// // var arr = [1, 2, 3, 4, 5, 6, 7];

// // alert(filter(arr, function(a) {
// //     return a % 2 == 0
// // }));

// // alert(filter(arr, inBetween(3, 6)));

// // alert( filter(arr, inArray([1, 2, 10])) );

// function makeArmy() {

//     var shooters = [];

//     for (var i = 0; i < 10; i++)(function(i) {

//         var shooter = function() {
//             alert(i);
//         };

//         shooters.push(shooter);

//     })(i);


//     return shooters;
// }

// // var army = makeArmy();

// // army[0](); // стрелок выводит 10, а должен 0
// // army[5](); // стрелок выводит 10...


// // function countDivs() {

// //   var count = document.getElementsByClassName('test');

// //   // if ((count.length % 2) == 0) return 'четное число'; 
// //   // return 'нечетное';

// //   count[2].classList.add('test-2');

// // }

// // countDivs();

// // function f() {
// //   var value = Math.random();

// //   function g() {
// //     debugger; // выполните в консоли alert( value ); Нет такой переменной!
// //   }

// //   return g;
// // }

// // var g = f();
// // g();


// // var value = "Сюрприз";

// // function f() {
// //   var value = "самое близкое значение";

// //   function g() {
// //     debugger; // выполните в консоли alert( value ); Сюрприз!
// //   }

// //   return g;
// // }

// // var g = f();
// // g();


// // function sumTo(n) { // обычный цикл 1+2+...+n
// //   var result = 0;
// //   for (var i = 1; i <= n; i++) {
// //     result += i;
// //   }
// //   return result;
// // }

// // function sumToRec(n) { // рекурсия sumToRec(n) = n+SumToRec(n-1)
// //   return n == 1 ? 1 : n + sumToRec(n - 1);
// // }

// // var timeLoop = performance.now();
// // for (var i = 1; i < 1000; i++) sumTo(1000); // цикл
// // timeLoop = performance.now() - timeLoop;

// // var timeRecursion = performance.now();
// // for (var i = 1; i < 1000; i++) sumToRec(1000); // рекурсия
// // timeRecursion = performance.now() - timeRecursion;

// // alert( "Разница в " + (timeRecursion / timeLoop) + " раз" );


// // var elem = {style: 10};

// // console.log(elem.style);

// // elem.style = {top: '10px', left: 20};

// // console.log(elem.style);

// // elem.style.bottom = '15px';

// // console.log(elem.style);

// // function func() {
// //   alert( this ); // выведет [object Window] или [object global]
// // }

// // func();

// // var arr = ["a", "b"];

// // arr.push(function() {
// //   alert( this );
// // })

// // arr[2]();

// // var calculator = {
// //     read: function() {
// //         this.a = +prompt('Enter first number', '');
// //         this.b = +prompt('Enter second number', '');
// //     },

// //     sum: function() {
// //         return this.a + this.b;
// //     },

// //     mul: function() {
// //         return this.a * this.b;
// //     }
// // };


// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


// var ladder = {
//   step: 0,
//   up: function() { // вверх по лестнице
//     this.step++;
//     return this;
//   },
//   down: function() { // вниз по лестнице
//     this.step--;
//     return this;
//   },
//   showStep: function() { // вывести текущую ступеньку
//     alert( this.step );
//     return this;
//   }
// };

// ladder.up().up().down().up().down().showStep();


// var user = {

//     firstName: 'Василий',

//     toString: function() {
//         return 'Пользователь ' + this.firstName;
//     }
// };

// alert(user);

// var test = {
//     test1: 1,
//     test2: 2,
//     toString: function() { return 'test message' }
// }

// alert(test);

// var room = {
//   number: 777,

//   valueOf: function() { return this.number; },
//   toString: function() { return this.number; }
// };

// alert( +room );  // 777, вызвался valueOf

// delete room.valueOf; // valueOf удалён

// alert( +room );

// var value = new Boolean(false);

// alert( value ); // выводит false, все ок..

// if (value) {
//   alert( true ); // ..но тогда почему выполняется alert в if ?!?
// }


// var foo = {
//   toString: function() {
//     return 'foo';
//   },
//   valueOf: function() {
//     return 2;
//   }
// };

// alert( foo );
// alert( foo + 1 );
// alert( foo + "3" );
// alert( foo + +"3" );

// new Date(0) - 0 //0
// new Array(1)[0] + "" //
// ({})[0] //
// [1] + 1 // 2
// [1,2] + [3,4] // 1,2,3,4
// [] + null + 1 // 1
// [[0]][0][0] //
// ({} + {})

// function sum(a) {

//   var currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//     f.toString = function() {
//     return currentSum;
//   };

//   return f;
// }

// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); 


// function Animal(name) {
//   this.name = name;
//   this.canWalk = true;
// }

// var animal = new Animal("ёжик");
// var animal2 = new Animal('Лиса');


// function User(name) {
//   this.name = name;

//   this.sayHi = function() {
//     alert( "Моё имя: " + this.name );
//   };
// }

// var ivan = new User("Иван");

// ivan.sayHi();

// var obj = {};
// var obj2 = obj;

// function A() {

//     return obj;
// }

// function B() {

//     return obj2;
// }

// var a = new A;
// var b = new B;

// alert(a == b);


// function Calculator() {

//     this.read = function() {

//         this.a = +prompt('Enter a', 0);
//         this.b = +prompt('Enter b', 0);
//     }

//     this.sum = function() {

//         return this.a + this.b;
//     }

//     this.mul = function() {

//         return this.a * this.b;
//     }
// }

// var calculator = new Calculator();
// calculator.read();

// alert("Сумма=" + calculator.sum());
// alert("Произведение=" + calculator.mul());


// function Accumulator(startingValue) {

//   this.value = startingValue;

//   this.read = function() {
//     this.value += +prompt('add value', 0);
//   }
// }

// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение


// function Calculator(str) {
//     var methods = {
//         '-': function(a, b) {
//             return a - b;
//         },
//         '+': function(a, b) {
//             return a + b;
//         }
//     };

//     this.calculate = function(str) {

//         var split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];

//         if (!methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return methods[op](a, b);
//     }

//     this.addMethod = function(name, func) {
//         methods[name] = func;
//     };
// }

// var calc = new Calculator;

// calc.addMethod("*", function(a, b) {
//     return a * b;
// });
// calc.addMethod("/", function(a, b) {
//     return a / b;
// });
// calc.addMethod("**", function(a, b) {
//     return Math.pow(a, b);
// });

// var result = calc.calculate("2 ** 3");
// alert(result);

// var user = {
//   name: "Вася",
//   toString: function() { return this.name; }
// };

// // помечаем toString как не подлежащий перебору в for..in
// Object.defineProperty(user, "toString", {enumerable: false});

// for(var key in user) {
//   alert(key + ': ' + user[key]);
//   }


//   var user = {
//   firstName: "Вася",
//   surname: "Петров"
// }

// Object.defineProperty(user, "fullName", {
//   get: function() {
//     return this.firstName + ' ' + this.surname;
//   }
// });

// for(var key in user) {
//   alert(key + ': ' + user[key]);
//   }

// function User(fullName) {

//     this.fullName = fullName;

//     Object.defineProperties(this, {

//         firstName: {
//             get: function() {
//                 return this.fullName.split(' ')[0];
//             },

//             set: function(newLastName) {
//                 this.fullName = this.firstName + ' ' + newLastName;
//             }
//         },

//         lastName: {

//             get: function() {
//                 return this.fullName.split(' ')[1];
//             },

//             set: function(newLastName) {
//                 this.fullName = this.firstName + ' ' + newLastName;
//             }

//         }
//     })
// }

// var vasya = new User("Василий Попкин");

// alert(vasya.firstName); // Василий
// alert(vasya.lastName); // Попкин

// // запись в lastName
// vasya.lastName = 'Сидоров';

// alert(vasya.fullName);

// alert(vasya.lastName);


// function Article() {
//   this.created = new Date();

//   Article.count++;
//   Article.last = this.created;

// }

// Article.count = 0;

// Article.showStats = function() {
//   alert('Всего: ' + this.count + ', последняя дата: ' + this.last);
// }

// new Article();
// new Article();

// Article.showStats(); // Всего: 2, Последняя: (дата)

// new Article();

// Article.showStats(); // Всего: 3, Последняя: (дата)


// function sum(arr) {
//   return arr.reduce(function(a, b) {
//     return a + b;
//   });
// }

// alert( sum([1, 2, 3]) ); // 6 (=1+2+3)


// function sumArgs() {

//   var args = [].slice.call(arguments);

//   return args.reduce(function(a, b) {
//     return a + b;
//   });
// }

// // alert( sumArgs(1, 2, 3) );

// function applyAll(func) {

//   return func.apply(this, [].slice.call(arguments, 1));
// }

// function sum() { // суммирует аргументы: sum(1,2,3) = 6
//   return [].reduce.call(arguments, function(a, b) {
//     return a + b;
//   });
// }

// function mul() { // перемножает аргументы: mul(2,3,4) = 24
//   return [].reduce.call(arguments, function(a, b) {
//     return a * b;
//   });
// }

// alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
// alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24


// function bind(func, context /*, args*/) {
//   var bindArgs = [].slice.call(arguments, 2); // (1)
//   function wrapper() {                        // (2)
//     var args = [].slice.call(arguments);
//     var unshiftArgs = bindArgs.concat(args);  // (3)
//     return func.apply(context, unshiftArgs);  // (4)
//   }
//   return wrapper;
// }

// function mul(a, b) {
//   return a * b;
// }

// var mulTemp = bind(mul, null, 2);

// alert( mulTemp );


// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   loginOk: function() {
//     alert( this.login + ' вошёл в сайт' );
//   },

//   loginFail: function() {
//     alert( this.login + ': ошибка входа' );
//   },

//   checkPassword: function() {
//     ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
//   }
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();


// function ask(question, answer, ok, fail) {
//     var result = prompt(question, '');
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
// }

// var user = {
//     login: 'Василий',
//     password: '12345',

//     // метод для вызова из ask
//     loginDone: function(result) {
//         alert(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
//     },

//     checkPassword: function() {
//         ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false));
//     }
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();



// var timers = {};

// // прибавит время выполнения f к таймеру timers[timer]
// function timingDecorator(f, timer) {
//   return function() {
//     var start = performance.now();

//     var result = f.apply(this, arguments); // (*)

//     if (!timers[timer]) timers[timer] = 0;
//     timers[timer] += performance.now() - start;

//     return result;
//   }
// }

// // функция может быть произвольной, например такой:
// var fibonacci = function f(n) {
//   return (n > 2) ? f(n - 1) + f(n - 2) : 1;
// }

// // использование: завернём fibonacci в декоратор
// fibonacci = timingDecorator(fibonacci, "fibo");

// // неоднократные вызовы...
// alert( fibonacci(10) ); // 55
// alert( fibonacci(20) ); // 6765
// // ...

// // в любой момент можно получить общее количество времени на вызовы
// alert( timers.fibo + 'мс' );


// function work(a, b) {
//   alert( a + b ); // work - произвольная функция
// }

// function makeLogging(f, log) {

//   function wrapper() {
//       log.push([].slice.call(arguments));
//       return f.apply(this, arguments);
//     }

//   return wrapper;
// }

// var log = [];
// work = makeLogging(work, log);

// work(1, 2); // 3
// work(4, 5); // 9

// for (var i = 0; i < log.length; i++) {
//   var args = log[i]; // массив из аргументов i-го вызова
//   alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
// }


// function f(x) {
//     return Math.random() * x; // random для удобства тестирования
// }

// function makeCaching(f) {
//     var cache = {};

//     return function(x) {
//         if (!(x in cache)) {
//             cache[x] = f.call(this, x);
//         }
//         return cache[x];
//     }
// }

// f = makeCaching(f);

// var a, b;

// a = f(1);
// b = f(1);
// alert(a == b); // true (значение закешировано)

// b = f(2);
// alert(a == b); // false, другой аргумент => другое значение

// var toString = {}.toString;

// var arr = [1, 2];
// alert( toString.call(arr) ); // [object Array]

// var date = new Date;
// alert( toString.call(date) ); // [object Date]

// var user = { name: "Вася" };
// alert( toString.call(user) ); // [object Object]

// function sayHi(who) {

//   if (Array.isArray(who)) {
//     who.forEach(sayHi);
//   } else {
//     alert( 'Привет, ' + who );
//   }
// }

// // Вызов с примитивным аргументом
// sayHi("Вася"); // Привет, Вася

// // Вызов с массивом
// sayHi(["Саша", "Петя"]); // Привет, Саша... Петя

// // Вызов с вложенными массивами - тоже работает!
// sayHi(["Саша", "Петя", ["Маша", "Юля"]]); // Привет Саша..Петя..Маша..Юля


// function formatDate(date) { 

//     if ( date.getDate || (typeof date == 'string')) date = new Date(date);

//     if (typeof date == 'number') date = new Date(date*1000);

//     if (date.splice) date = new Date(date[0], date[1], date[2]);

//      return date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});
//  }

// alert( formatDate('2011-10-02') ); // 02.10.11
// alert( formatDate(1234567890) ); // 14.02.09
// alert( formatDate([2014, 0, 1]) ); // 01.01.14
// alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14

// var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// user = JSON.parse(user);

// alert( user.friends[1] ); // 1

// дата в строке - в формате UTC
// var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';

// var event = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// alert( event.date.getMonth() + 1 );

// var event = {
//   title: "Конференция",
//   date: "сегодня"
// };

// var str = JSON.stringify(event);
// alert( str ); // {"title":"Конференция","date":"сегодня"}

// // Обратное преобразование.
// event = JSON.parse(str);


// var leader = {
//   name: "Василий Иванович",
//   age: 35
// };

// console.log(leader);

// leader = JSON.stringify(leader);

// console.log(leader);

// leader = JSON.parse(leader);

// console.log(leader);


// var leader = {
//   name: "Василий Иванович"
// };

// var soldier = {
//   name: "Петька"
// };

// // эти объекты ссылаются друг на друга!
// leader.soldier = soldier;
// soldier.leader = leader;

// var team = [leader, soldier];


// soldier = Object.assign(soldier, leader.soldier);

// leader = Object.assign(leader, soldier.leader);

// team = JSON.stringify(team);

// console.log(teamNew);

// setTimeout(function() { alert('Привет') }, 1000);

// var timerId = setTimeout(function() { alert(12) }, 1000);
// alert(timerId); // число - идентификатор таймера

// clearTimeout(timerId);
// alert(timerId); 


// начать повторы с интервалом 2 сек
// var timerId = setInterval(function() {
//   alert( "тик" );
// }, 2000);

// // через 5 сек остановить повторы
// setTimeout(function() {
//   clearInterval(timerId);
//   alert( 'стоп' );
// }, 5000);


// function printNumbersInterval() {

//     var i = 1;

//     var printNumber = setInterval(function() {
//         if (i <= 20) {
//             console.log(i++);
//         } else {
//             clearInterval(printNumber);
//         }
//     }, 100);

// }

// console.log(printNumbersInterval());


// function printNumbersInterval() {

//     var i = 1;

//     var timerId = setTimeout(function tick() {
//         console.log(i++);
//         if (i <= 20) timerId = setTimeout(tick, 100);
//     }, 100);
// }

// printNumbersInterval();


// function delay(f, ms) {

//     return function() {
//         var savedThis = this;
//         var savedArgs = arguments;

//         setTimeout(function() {
//             f.apply(savedThis, savedArgs);
//         }, ms);
//     };
// }


// function f(x) {
//     alert(x);
// }

// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);

// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд


// function debounce(f, ms) {

// var call;

// return function() {
//     var savedThis = this;
//     var savedArgs = arguments;

//     clearTimeout(call);

//     call = setTimeout(function() {
//         return f.apply(savedThis, savedArgs);
//     }, ms);
// };

// }


// function fa(x) {
//     alert(x);
// }

// let f = debounce(fa, 1000);

// f(1); // вызов отложен на 1000 мс
// f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// // через 1 секунду будет выполнен вызов f(1)

// setTimeout(function() { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
// setTimeout(function() { f(4) }, 1200); // игнорируем вызов (3)

// через 2200 мс от начала выполнения будет выполнен вызов f(4)


// function debounce(f, ms) {

// let timer = null;

// return function (...args) {
//   const onComplete = () => {
//     f.apply(this, args);
//     timer = null;
//   }

//   if (timer) {
//     clearTimeout(timer);
//   }

//   timer = setTimeout(onComplete, ms);
// };
// }

// function f(x) { alert(x) }
// var f = debounce(f, 1000);

// f(1); // вызов отложен на 1000 мс
// f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// // через 1 секунду появится alert(2)

// setTimeout( function() { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
// setTimeout( function() { f(4) }, 1200); // игнорируем вызов (3)

// // через 2200 мс от начала выполнения появится alert(4)

// function throttle(func, ms) {

//     var isThrottled = false,
//         savedArgs,
//         savedThis;

//     function wrapper() {

//         if (isThrottled) { // (2)
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }

//         func.apply(this, arguments); // (1)

//         isThrottled = true;

//         setTimeout(function() {
//             isThrottled = false; // (3)
//             if (savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }

//     return wrapper;

// }

// var f = function(a) {
//     console.log(a)
// };

// // затормозить функцию до одного раза в 1000 мс
// var f1000 = throttle(f, 1000);

// f1000(1); // выведет 1
// f1000(2); // (тормозим, не прошло 1000 мс)
// f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется

// var a = 2;

// eval("a = 5; function f() { }");
// alert( a );


// var str = prompt('Enter sequence', '');

// console.log(eval(str));


// try {

//   alert('Начало блока try');  // (1) <--

//   lalala; // ошибка, переменная не определена!

//   alert('Конец блока try');  // (2)

// } catch(e) {

//   alert('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--

// }

// alert("Потом код продолжит выполнение...");


// var data = '{ "age": 30 }'; // данные неполны

// try {

//   var user = JSON.parse(data); // <-- выполнится без ошибок

//   if (!user.name) {
//     throw new SyntaxError("Данные некорректны");
//   }

//   alert( user.name );

// } catch (e) {
//   alert( "Извините, в данных ошибка" );
// }


// var a = new F();
// var b = new F();

// alert(a == b);

// function F() {}

// var c = {};

// var a = c;
// var b = c;

// alert( a == b );

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 3
// console.log(null == undefined); // false
// console.log(null == 0); // true
// console.log(null >  0); // false
// console.log(null >= 0); // true
// console.log("a" > "A"); // true

// var list = [1, 2, 3, 4, 5, 6];

// var list = [1, 2, 3, 4, 5, 6];

// function sum() {
//     var sum = 0;
//     for (var i = 0; i < arguments[0].length; i++) {
//         sum += arguments[0][i];
//         // alert(sum);
//     }
//     return sum;
// }

// alert(sum(list));


// var vagabond = {
//     top: 0,
//     left: 0,
//     goUp: function() {
//     	this.top--;
//     	return this;
//     },
//     goLeft: function() {
//     	this.left--;
//     	return this;
//     },
//     goDown: function() {
//     	this.top++;
//     	return this;
//     },
//     goRight: function() {
//     	this.left++;
//     	return this;
//     }
// }

//  vagabond.goUp().goLeft().goDown().goDown().goRight();

// // vagabond.goUp();

// alert(vagabond.top);
// alert(vagabond.left);

// var list = [34, 1, 529, 1000001, -78, 1213123, 89.7, 1243];


// function maxElem(arr) {

// 	var max = arr[0];

// 	for (var i = 1; i < arr.length; i++) {

// 		if ( max < arr[i]) max = arr[i];
// 	}

// 	return max;
// }

// console.log(maxElem(list));


// var a = new F();
// var b = new F();

// alert(a == b);

// function F() {}

// try {

//   alert('Начало блока try');  // (1) <--

//   lalala; // ошибка, переменная не определена!

//   alert('Конец блока try');  // (2)

// } catch(e) {

//   alert('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--

// }

// alert("Потом код продолжит выполнение...");

// var data = "Has Error"; // в данных ошибка

// try {

//   var user = JSON.parse(data); // <-- ошибка при выполнении
//   alert( user.name ); // не сработает

// } catch (e) {
//   // ...выполнится catch
//   alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз" );
//   alert( e.name );
//   alert( e.message );
// }

// var data = '{ "age": 30 }'; // данные неполны

// try {

//   var user = JSON.parse(data); // <-- выполнится без ошибок

//   if (!user.name) {
//     throw new SyntaxError("Данные некорректны");
//   }

//   alert( user.name );

// } catch (e) {
//   alert( e.stack );
// }


// function readData() {
//   var data = '{ "name": "Вася", "age": 30 }';

//   try {
//     // ...
//     blabla(); // ошибка!
//   } catch (e) {
//     // ...
//     if (e.name != 'SyntaxError') {
//       throw e; // пробрасываем
//     }
//   }
// }

// try {
//   readData();
// } catch (e) {
//   alert( "Поймал во внешнем catch: " + e ); // ловим
// }


// function sum(n) {
//   return n ? (n + sum(n - 1)) : 0;
// }

// var n = +prompt('Введите n?', 100);

// var start = new Date();

// try {
//   var result = sum(n);
// } catch (e) {
//   result = 0;
// } finally {
//   var diff = new Date() - start;
// }

// alert( result ? result : 'была ошибка' );
// alert( "Выполнение заняло " + diff );



// function strCalc() {
//     var str = prompt('Введите выражение', '');

//     try {
//         if (isNaN(eval(str)) || eval(str) === undefined || eval(str) == null) throw new Error('Результат неопределен');
//         return eval(str);
//     } catch (e) {
//         alert( "Ошибка: " + e.message + ", повторите ввод" );
//         return strCalc();
//     }
// }

// alert(strCalc());

function CoffeeMachine(power) {

    this.waterAmount = 0;

    // физическая константа - удельная теплоёмкость воды для getBoilTime
    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    // расчёт времени для кипячения
    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
    };

    // что делать по окончании процесса
    function onReady() {
        alert('Кофе готов!');
    }

    this.run = function() {
        setTimeout(onReady, getBoilTime());
    };

}

var coffeeMachine = new CoffeeMachine(102200);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();