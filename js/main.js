const menuBtn = document.querySelector('.menu__btn');
const mainInner = document.querySelector('.main');
const menuMobile = document.querySelector('.header__contacts');

menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open');
    mainInner.classList.toggle('main--open');
});


let valueDisplays = document.querySelectorAll('.numbers__title');
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute('data-max'));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

wow = new WOW(
  {
    boxClass: 'wow',      // default
    animateClass: 'animate__animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  }
)
wow.init();

Fancybox.bind('[data-fancybox]', {
});   