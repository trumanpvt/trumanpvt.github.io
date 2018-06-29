'use strict';

function ucFirst(str) {

    var newStr = str[0].toUpperCase();

    for (var i = 1; i < str.length; i++) {
        newStr += str[i].toLowerCase();
    }

    return newStr;
}

function checkSpam(str) {

    if (~str.indexOf("viagra")) return true;

    return false;

}

function truncate(str, maxlength) {

    if (str.length > maxlength) {
        var newStr = str.slice(0, maxlength - 3) + '...';
        return newStr;
    }

    return str;
}

function extractCurrencyValue(str) {
    return +str.slice(1);
}

function extractInt(str) {
    var newStr = '';

    for (var i = 0; i <= str.length; i++) {

        if (Number.isInteger(+str[i])) newStr += str[i];
    }

    return newStr;
}

var str = '$12';

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }

    return true;
}

function sumOfCash(obj) {
    var sum = 0;

    for (var key in obj) {
        sum += +obj[key];
    }

    return sum;

}

function biggestCash(obj) {
    var biggest = 0;
    var name = '';

    for (var key in obj) {
        if (obj[key] > biggest) {
            biggest = +obj[key];
            name = key;
        }
    }

    return name || 'Нет сотрудников';
}

var salaries = {
    "Вася": 1100,
    "Петя": 1300,
    "Даша": 250
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {

	for (var key in obj) {
		if (isNumeric(obj[key])) {
			obj[key] *= 2;
		}
	}
}

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

var time = {
  year: 2345,
  month: 11,
  day: 10,
  hour: 11,
  minute: 12,
  second: 13,
  microsecond: 123456
}

console.log(time); // (*)
time.microsecond++; // (**)

console.log(time);
time.microsecond++;

console.log(time);
time.microsecond++;