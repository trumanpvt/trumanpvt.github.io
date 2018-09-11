'use strict';

(function() {
var arr = document.querySelectorAll('.carousel > div');
var arrowLeft = document.getElementsByClassName('arrow')[0];
var arrowRight = document.getElementsByClassName('arrow')[1];

function slideRight() {

    arrowRight.style.opacity = '0.7';
    var timerId = setTimeout(function() { arrowRight.style.opacity = '1' }, 100);

    var firstSlide = arr[0].innerHTML;
    for (var i = 0; i < arr.length - 1; i++) arr[i].innerHTML = arr[i + 1].innerHTML;
    arr[arr.length - 1].innerHTML = firstSlide;
};

function slideLeft() {

    arrowLeft.style.opacity = '0.7';
    var timerId = setTimeout(function() { arrowLeft.style.opacity = '1' }, 100);

    var lastSlide = arr[arr.length - 1].innerHTML;
    for (var i = arr.length - 1; i > 0; i--) arr[i].innerHTML = arr[i - 1].innerHTML;
    arr[0].innerHTML = lastSlide;
};


arrowRight.addEventListener("click", slideRight);
arrowLeft.addEventListener("click", slideLeft);
addEventListener('keydown', slider);

function slider(e) {

    switch (e.keyCode) {

        case 37:
            slideLeft();
            break;

        case 39:
            slideRight();
            break;

    }
}

})();