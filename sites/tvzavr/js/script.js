'use strict';


function slider(e) {

    var snake = document.getElementById("snake");
    var cs = window.getComputedStyle(snake);

    switch (e.keyCode) {

        case 37: // если нажата клавиша влево
          
            break;

        case 39: // если нажата клавиша вправо

            break;

    }
}

addEventListener("keydown", slider);