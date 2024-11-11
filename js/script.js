document.addEventListener("DOMContentLoaded", function () {
    // Введение операции деления по модулю (для слайдера)
    const mod = (n, m) => ((n % m) + m) % m;

    // слайдер мобильной версии
    const slider = document.getElementsByClassName('roadmap__container')[0];
    const slides = document.querySelectorAll('.roadmap__container>.roadmap__item-container');
    const slideWidth = slides[0].clientWidth;
    const btnLeft = document.getElementsByClassName('roadmap__btn-left')[0];
    const btnRight = document.getElementsByClassName('roadmap__btn-right')[0];

    btnLeft.addEventListener('click', function () {
        slider.scrollLeft = mod((slider.scrollLeft - slideWidth), (slideWidth * slides.length));
    });

    btnRight.addEventListener('click', function () {
        slider.scrollLeft = mod((slider.scrollLeft + slideWidth), (slideWidth * slides.length));
    });
});