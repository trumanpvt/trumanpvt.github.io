'use strict';

// var snake = {
//     top: 140,
//     left: 158,
//     goleft: function() {

//         return this;
//     },
//     goRight: function() {

//         return this;
//     },
//     goTop: function() {

//         return this;
//     },
//     goBottom: function() {

//         return this;
//     }
// };

var leftCoord = 158;
var topCoord = 140;

function moveSnake(e) {

    // var blueRect = document.getElementById("blueRect");

    var snake = document.getElementById("snake");
    // получаем стиль для blueRect
    var cs = window.getComputedStyle(snake);

    switch (e.keyCode) {

        case 37: // если нажата клавиша влево
            if (leftCoord > 5)
                snake.style.left = leftCoord - 4 + "px";
            leftCoord -= 4;

            break;
        case 38: // если нажата клавиша вверх
            if (topCoord > 5)
                snake.style.top = topCoord - 4 + "px";
            topCoord -= 4;
            break;
        case 39: // если нажата клавиша вправо
            if (leftCoord < 315)
                snake.style.left = leftCoord + 4 + "px";
            leftCoord += 4
            break;
        case 40: // если нажата клавиша вниз
            if (topCoord < document.documentElement.clientHeight - 100)
                snake.style.top = topCoord + 4 + "px";
            topCoord += 4;
            break;
    }
}

addEventListener("keydown", moveSnake);