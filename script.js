const screen = document.querySelector('.screen');
const card = document.querySelector('.card');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let contador=10
prev.addEventListener('click', () => {
    card.style.transform = `translateX(${100-contador}px)`;
    card.style.transition = 'transform 0.5s lienar';
    contador+=10;
    if(contador===100){
        card.style.transform = `translateX(100px)`;
        contador=10;
    };
});