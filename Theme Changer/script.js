const body = document.body;

// Header hide on scroll up & Header Awake on scroll down
function headerOnScroll(){
    var lastScrollTop = 0;
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    window.addEventListener("scroll" , function() {
        var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop){
            body.classList.add('bodyScrolled');
        }
        else {
            body.classList.remove('bodyScrolled');
        }
        lastScrollTop = scrollTop;
        console.log(lastScrollTop);
    });
}

// Dropdowns
function dropdowns(){
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.button');
        const menu = dropdown.querySelector('.menu');
        button.addEventListener("click" , () => {
            button.classList.toggle('buttonActive');
            menu.classList.toggle('menuActive');
        });
    });
}

// Hamburger Menu
function hamburgerMenus(){
    const hamBurgerMenus = document.querySelectorAll('.hamBurgerMenu');
    hamBurgerMenus.forEach(hamBurgerMenu => {
        const button = hamBurgerMenu.querySelector('.button');
        const menu = hamBurgerMenu.querySelector('.menu');
        button.addEventListener("click" , () => {
            button.classList.toggle('buttonActive');
            menu.classList.toggle('menuActive');
        });
    });
}

// Hero section background traansform on srcoll
function heroSectionOnScroll(){
    window.addEventListener('scroll', function() {
        const homeSection = document.getElementById("Home");
        const homeSectionDecor = homeSection.querySelector('.decor');
        let scrollPosition = window.pageYOffset;
        document.querySelector('.hero').style.backgroundPositionX = `${scrollPosition * -0.125}px`; // Adjust speed here
        document.documentElement.style.setProperty('--scrollPosition' , scrollPosition * 0.05 + "px");
    });
}

function theme(){
    const defaultBtn = document.getElementById("defaultBtn");
    const pinkBtn = document.getElementById("pinkBtn");
    const greenBtn = document.getElementById("greenBtn");
    const redButton = document.getElementById("redButton");
    const orangeBtn = document.getElementById("orangeBtn");
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    
    defaultBtn.onclick = () => {
        body.classList.remove('pink','green','red','orange');
        body.classList.add('deafult');
    }
    
    pinkBtn.onclick = () => {
        body.classList.remove('deafult','green','red','orange');
        body.classList.add('pink');
    }
    
    greenBtn.onclick = () => {
        body.classList.remove('deafult','pink','red','orange');
        body.classList.add('green');
    }
    
    redButton.onclick = () => {
        body.classList.remove('deafult','pink','green','orange');
        body.classList.add('red');
    }
    
    orangeBtn.onclick = () => {
        body.classList.remove('deafult','pink','green','red');
        body.classList.add('orange');
    }
    
    themeToggleBtn.onclick = () => {
        if (body.classList.contains('light')){
            body.classList.toggle('dark');
            body.classList.remove('light');
        }
        else if (body.classList.contains('dark')){
            body.classList.toggle('light');
            body.classList.remove('dark');
        }
    }
}

function launchJavascript(){
    headerOnScroll();
    dropdowns();
    hamburgerMenus();
    heroSectionOnScroll();
    theme();
}

launchJavascript();