function forEachHaburgers(){
    const hamburgers = document.querySelectorAll('.hamburger');
    hamburgers.forEach(hamburger => {
        const button = hamburger.querySelector("button");
        const menu = hamburger.querySelector("ul");
        function toggleHamburgerState(){
            button.classList.toggle('active');
            menu.classList.toggle('active');
        }
        button.addEventListener("click",toggleHamburgerState);
    });
}
function launchJavascript(){
    forEachHaburgers();
}
launchJavascript();