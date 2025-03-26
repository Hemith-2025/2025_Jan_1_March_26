function dropdown(){
    const dropdowns = document.querySelectorAll('.dropdown');
    const colorPreview = document.querySelector('.colorPreview');
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('#button');
        const menu = dropdown.querySelector("ul");
        const colorButtons = menu.querySelectorAll("button");
        function toggleDropdown(){
            button.classList.toggle('active');
            menu.classList.toggle('active');
            colorPreview.classList.toggle('active');
        }
        button.addEventListener("click" , toggleDropdown);
        colorButtons.forEach(colorButton => {
            function toggleActive(){
                menu.querySelector('.active').classList.remove('active');
                colorButton.classList.toggle('active');
            }
            colorButton.addEventListener("click" , toggleActive);
        });
    });
}
function eachSliderCover(){
    const sliderCovers = document.querySelectorAll('.sliderCover');
    sliderCovers.forEach(sliderCover => {
        const slider = sliderCover.querySelector('.slider');
        const valueBox = sliderCover.querySelector('.valueBox');
        function updateValueBox(){
            valueBox.textContent = slider.value;
        }
        slider.addEventListener("input" , updateValueBox);
    });
}
function shiftThemes(){
    const defaultBtn = document.getElementById("defaultBtn");
    const RedBtn = document.getElementById('RedBtn');
    const greenBtn = document.getElementById('greenBtn');
    const orangeBtn = document.getElementById('orangeBtn');
    const pinkBtn = document.getElementById('pinkBtn');
    defaultBtn.addEventListener("click" , () => {
        document.documentElement.style.setProperty('--default','#000');
    });
    RedBtn.addEventListener("click" , () => {
        document.documentElement.style.setProperty('--default','rgb(255, 0, 0)');
    });
    greenBtn.addEventListener("click" , () => {
        document.documentElement.style.setProperty('--default','rgb(0, 133, 0)');
    });
    orangeBtn.addEventListener("click" , () => {
        document.documentElement.style.setProperty('--default','rgb(255, 81, 0)');
    });
    pinkBtn.addEventListener("click" , () => {
        document.documentElement.style.setProperty('--default','rgb(255, 0, 140)');
    });
}
function updateColorCode(){
    const colorCodeBox = document.getElementById("colorCode");
    const colorPreview = document.querySelector('.colorPreview');
    const redSlider = document.getElementById("redSlider");
    const greenSlider = document.getElementById("greenSlider");
    const blueSlider = document.getElementById("blueSlider");
    let colorCode = "rgb("+redSlider.value+","+greenSlider.value+","+blueSlider.value+")";
    colorPreview.style.background = colorCode;
    colorCodeBox.textContent = colorCode;
    console.log("Color code Changed : "+colorCode);
}
function updateRandomColorCode(){
    const colorCodeBox = document.getElementById("colorCode");
    const colorPreview = document.querySelector('.colorPreview');
    const redSlider = document.getElementById("redSlider");
    const greenSlider = document.getElementById("greenSlider");
    const blueSlider = document.getElementById("blueSlider");
    const redSliderValueBox = document.getElementById("redSliderValueBox");
    const greenSliderValueBox = document.getElementById("greenSliderValueBox");
    const blueSliderValueBox = document.getElementById("blueSliderValueBox");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    redSlider.value = r;
    redSliderValueBox.textContent = r;
    greenSlider.value = g;
    greenSliderValueBox.textContent = g;
    blueSlider.value = b;
    blueSliderValueBox.textContent = b;
    let colorCode = "rgb("+r+","+g+","+b+")";
    colorPreview.style.background = colorCode;
    colorCodeBox.textContent = colorCode;
    console.log("Random color Code: "+colorCode);
}
function updateResetColorCode(){
    const colorCodeBox = document.getElementById("colorCode");
    const colorPreview = document.querySelector('.colorPreview');
    const redSlider = document.getElementById("redSlider");
    const greenSlider = document.getElementById("greenSlider");
    const blueSlider = document.getElementById("blueSlider");
    const redSliderValueBox = document.getElementById("redSliderValueBox");
    const greenSliderValueBox = document.getElementById("greenSliderValueBox");
    const blueSliderValueBox = document.getElementById("blueSliderValueBox");
    redSlider.value = 0;
    redSliderValueBox.textContent = 0;
    greenSlider.value = 0;
    greenSliderValueBox.textContent = 0;
    blueSlider.value = 0;
    blueSliderValueBox.textContent = 0;
    let colorCode = "rgb("+0+","+0+","+0+")";
    colorPreview.style.background = colorCode;
    colorCodeBox.textContent = colorCode;
    console.log("Color code resetted");
}
function copyColorCode(){
    const colorCodeBox = document.getElementById("colorCode");
    navigator.clipboard.writeText(colorCodeBox.textContent);
    alert("color code copied!");
}
function launchJavascript(){
    dropdown();
    eachSliderCover();
    shiftThemes();
    updateColorCode();
    const redSlider = document.getElementById("redSlider");
    const greenSlider = document.getElementById("greenSlider");
    const blueSlider = document.getElementById("blueSlider");
    const colorCodeBox = document.getElementById("colorCode");
    const randomBtn = document.getElementById("randomBtn");
    const resetBtn = document.getElementById("resetBtn");
    redSlider.addEventListener("input" , updateColorCode);
    greenSlider.addEventListener("input" , updateColorCode);
    blueSlider.addEventListener("input" , updateColorCode);
    colorCodeBox.addEventListener("click" , copyColorCode);
    randomBtn.addEventListener("click" , updateRandomColorCode);
    resetBtn.addEventListener("click" , updateResetColorCode);
}
launchJavascript();