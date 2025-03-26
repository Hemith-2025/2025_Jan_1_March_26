const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
next.addEventListener("click",function(){
    let slides = document.querySelectorAll('.slide');
    document.querySelector('.slider').appendChild(slides[0]);
})
prev.addEventListener("click",function(){
    let slides = document.querySelectorAll('.slide');
    document.querySelector('.slider').prepend(slides[slides.length - 1]);
})