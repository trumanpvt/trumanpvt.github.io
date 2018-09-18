'use strict';

// вызов getTime() будет возвращать текущее время
let getTime = () => new Date().getHours() + ':' + new Date().getMinutes();

alert( getTime() ); // текущее время