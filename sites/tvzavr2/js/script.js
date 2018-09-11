'use strict';

(function() {
    var carousel = document.getElementsByClassName('carousel');
    var arr = carousel[0].getElementsByTagName('*');
    var currentSlide = 1;
    var length = arr.length;
    var arrowLeft = document.getElementsByClassName('arrow')[0];
    var arrowRight = document.getElementsByClassName('arrow')[1];

    function slideLeft() {

        if (currentSlide > 0) {
            arr[currentSlide].classList.remove('focused');
            arr[currentSlide -= 1].classList.add('focused');

            if (currentSlide - 1 >= 0) {
                arr[currentSlide - 1].style.display = 'block';
            }
        }

        arrowLeft.style.opacity = '0.7';

        var timerId = setTimeout(function() { arrowLeft.style.opacity = '1' }, 100);

    }

    function slideRight() {

        if (currentSlide < length - 1) {
            arr[currentSlide].classList.remove('focused');
            arr[currentSlide += 1].classList.add('focused');

            if (currentSlide + 2 < length && currentSlide - 2 >= 0) {
                arr[currentSlide - 2].style.display = 'none';
            }
        } 

        arrowRight.style.opacity = '0.7';

        var timerId = setTimeout(function() { arrowRight.style.opacity = '1' }, 100);

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

    arrowLeft.addEventListener('click', slideLeft);

    arrowRight.addEventListener('click', slideRight);

})();