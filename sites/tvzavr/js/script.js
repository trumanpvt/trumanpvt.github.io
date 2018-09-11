'use strict';

var carousel = document.getElementsByClassName('carousel');
var divs = carousel[0].getElementsByTagName('*');
var currentSlide = 1;
var length = divs.length;

function slideLeft() {

    if (currentSlide > 0) {
        divs[currentSlide].classList.remove('focused');
        divs[currentSlide -= 1].classList.add('focused');

        if (currentSlide - 1 >= 0) {
            divs[currentSlide - 1].style.display = 'block';
        }
    }
    console.log('left');
    console.log('currentSlide: ' + currentSlide);
    console.log('length: ' + length);
}

function slideRight() {

    if (currentSlide < length - 1) {
        divs[currentSlide].classList.remove('focused');
        divs[currentSlide += 1].classList.add('focused');

        if (currentSlide + 2 < length) {
            divs[currentSlide - 2].style.display = 'none';
        }
    }

    console.log('right');
    console.log('currentSlide: ' + currentSlide);
    console.log('length: ' + length);
}


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

addEventListener('keydown', slider);