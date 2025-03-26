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
function forEachNavigationDropdown(){
    const navigationDropdowns = document.querySelectorAll('.navigationDropdown');
    navigationDropdowns.forEach(navigationDropdown => {
        const button = navigationDropdown.querySelector('button');
        const menu = navigationDropdown.querySelector('.navigationDropdownMenu');
        button.addEventListener("click" , function(){
            button.classList.toggle('navigationDropdownButtonActive');
            menu.classList.toggle('navigationDropdownMenuActive');
        })
    });
}
function foreachHeaderHamburgerMenu(){
    const headerHamburgerMenus = document.querySelectorAll('.headerHamburgerMenu');
    headerHamburgerMenus.forEach(headerHamburgerMenu => {
        const button = headerHamburgerMenu.querySelector('button');
        const menu = headerHamburgerMenu.querySelector('.hamburgerMenuMenu');
        button.addEventListener("click" , function(){
            button.classList.toggle('hamburgerMenuButtonActive');
            menu.classList.toggle('hamburgerMenuMenuActive');
        })
    });
}
function forAccordions(){
    const salesExecutiveButton = document.getElementById("salesExecutiveButton");
    const insideSalesExecutiveButton = document.getElementById("insideSalesExecutiveButton");
    const deliveryExecutiveButton = document.getElementById("deliveryExecutiveButton");
    const accordionFirstContent = document.getElementById("accordionFirstContent");
    const accordionSecondContent = document.getElementById("accordionSecondContent");
    const accordionThirdContent = document.getElementById("accordionThirdContent");
    salesExecutiveButton.addEventListener("click" , function(){
        accordionFirstContent.classList.add('accordionContentActive');
        accordionSecondContent.classList.remove('accordionContentActive');
        accordionThirdContent.classList.remove('accordionContentActive');
        salesExecutiveButton.classList.add('accordionButtonActive');
        insideSalesExecutiveButton.classList.remove('accordionButtonActive');
        deliveryExecutiveButton.classList.remove('accordionButtonActive');
    });
    insideSalesExecutiveButton.addEventListener("click" , function(){
        accordionFirstContent.classList.remove('accordionContentActive');
        accordionSecondContent.classList.add('accordionContentActive');
        accordionThirdContent.classList.remove('accordionContentActive');
        salesExecutiveButton.classList.remove('accordionButtonActive');
        insideSalesExecutiveButton.classList.add('accordionButtonActive');
        deliveryExecutiveButton.classList.remove('accordionButtonActive');
    });
    deliveryExecutiveButton.addEventListener("click" , function(){
        accordionFirstContent.classList.remove('accordionContentActive');
        accordionSecondContent.classList.remove('accordionContentActive');
        accordionThirdContent.classList.add('accordionContentActive');
        salesExecutiveButton.classList.remove('accordionButtonActive');
        insideSalesExecutiveButton.classList.remove('accordionButtonActive');
        deliveryExecutiveButton.classList.add('accordionButtonActive');
    });
}
function launchJavascript(){
    headerOnScroll();
    forEachNavigationDropdown();
    foreachHeaderHamburgerMenu();
    forAccordions();
}
launchJavascript();
