let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');
let grass = document.getElementById('grass');

window.addEventListener("scroll" , function() {
    let value = window.scrollY;
    text.style.marginTop = value * 2.25 + "px";
    treeLeft.style.left = value * -0.5 + "px";
    treeRight.style.right = value * -0.5 + "px";
    gateLeft.style.left = value * 0.5 + "px";
    gateRight.style.right = value * 0.5 + "px";
})