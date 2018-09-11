'use strict';

var carousel = document.getElementsByClassName('carousel');
var divs = carousel[0].getElementsByTagName('*');
var currentSlide = 1;
var length = divs.length;
var arrowLeft = document.getElementsByClassName('arrow')[0];
var arrowRight = document.getElementsByClassName('arrow')[1];

function slideLeft() {

    if (currentSlide > 0) {
        divs[currentSlide].classList.remove('focused');
        divs[currentSlide -= 1].classList.add('focused');

        if (currentSlide - 1 >= 0) {
            divs[currentSlide - 1].style.display = 'block';
        }
    }

    arrowLeft.style.opacity = '0.7';

    var timerId = setTimeout(function() { arrowLeft.style.opacity = '1' }, 100);

    console.log('left');
    console.log('currentSlide: ' + currentSlide);
    console.log('length: ' + length);
}

function slideRight() {

    if (currentSlide < length - 1) {
        divs[currentSlide].classList.remove('focused');
        divs[currentSlide += 1].classList.add('focused');

        if (currentSlide + 2 < length && currentSlide - 2 >= 0) {
            divs[currentSlide - 2].style.display = 'none';
        }
    }

    arrowRight.style.opacity = '0.7';
    
    var timerId = setTimeout(function() { arrowRight.style.opacity = '1' }, 100);

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