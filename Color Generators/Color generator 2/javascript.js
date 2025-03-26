function dropdown(){
    const body = document.body;
    const dropdown = document.querySelector('.dropdown');
    const button = dropdown.querySelector('.button');
    const menu = dropdown.querySelector('.menu');
    button.addEventListener("click" , () => {
        menu.classList.toggle('menuActive');
    });
    const colorButtons = menu.querySelectorAll("button");
    colorButtons.forEach(colorButton => {
        colorButton.addEventListener("click" , () => {
            menu.querySelector('.active').classList.remove('active');
            colorButton.classList.add('active');
            body.classList.remove('default','pink','green','red','orange');
        });
    });
    
    const defaultBtn = document.getElementById("defaultBtn");
    const pinkBtn = document.getElementById("pinkBtn");
    const greenBtn = document.getElementById("greenBtn");
    const RedBtn = document.getElementById("RedBtn");
    const OrangeBtn = document.getElementById("OrangeBtn");
    defaultBtn.addEventListener("click" , () => { body.classList.toggle('default'); });
    pinkBtn.addEventListener("click" , () => { body.classList.toggle('pink'); });
    greenBtn.addEventListener("click" , () => { body.classList.toggle('green'); });
    RedBtn.addEventListener("click" , () => { body.classList.toggle('red'); });
    OrangeBtn.addEventListener("click" , () => { body.classList.toggle('orange'); });

}

function sliders(){

    const sliders = document.querySelector('.sliders');
    const sliderCovers = sliders.querySelectorAll('.sliderCover');
    sliderCovers.forEach(sliderCover => {
        const input = sliderCover.querySelector("input");
        const box = sliderCover.querySelector("div");
        input.addEventListener("input" , () => {
            box.innerHTML = input.value;
            updateColorCode();
        })
    });

    const redSlider = document.getElementById("redSlider");
    const greenSlider = document.getElementById("greenSlider");
    const blueSlider = document.getElementById("blueSlider");
    function updateColorCode(){
        const colorCode = document.querySelector('.colorCode');
        colorCode.textContent = "rgb(" + redSlider.value + "," + greenSlider.value + "," + blueSlider.value + ")";
        const colorPreview = document.querySelector('.colorPreview');
        colorPreview.style.background = colorCode.textContent;
    }

}

function randomiseColor(){
    randomRed = Math.floor(Math.random() * 255);
    randomGreen = Math.floor(Math.random() * 255);
    randomBlue = Math.floor(Math.random() * 255);
    redSlider.value = randomRed;
    greenSlider.value = randomGreen;
    blueSlider.value = randomBlue;
    const colorCode = document.querySelector('.colorCode');
    colorCode.textContent = "rgb(" + redSlider.value + "," + greenSlider.value + "," + blueSlider.value + ")";
    const colorPreview = document.querySelector('.colorPreview');
    colorPreview.style.background = colorCode.textContent;
    const redValueBox = document.querySelector('.redValueBox');
    const greenValueBox = document.querySelector('.greenValueBox');
    const blueValueBox = document.querySelector('.blueValueBox');
    redValueBox.textContent = redSlider.value;
    greenValueBox.textContent = greenSlider.value;
    blueValueBox.textContent = blueSlider.value;
}

function resetColor(){
    redSlider.value = 255;
    greenSlider.value = 255;
    blueSlider.value = 255;
    const colorCode = document.querySelector('.colorCode');
    colorCode.textContent = "rgb(255,255,255)";
    const colorPreview = document.querySelector('.colorPreview');
    colorPreview.style.background = colorCode.textContent;
    const redValueBox = document.querySelector('.redValueBox');
    const greenValueBox = document.querySelector('.greenValueBox');
    const blueValueBox = document.querySelector('.blueValueBox');
    redValueBox.textContent = redSlider.value;
    greenValueBox.textContent = greenSlider.value;
    blueValueBox.textContent = blueSlider.value;
}

function launchJavascript(){
    dropdown();
    sliders();
    const randomiseBtn = document.getElementById("randomiseBtn");
    randomiseBtn.addEventListener("click" , () => { randomiseColor(); });
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener("click" , () => { resetColor(); });
    const colorCode = document.querySelector('.colorCode');
    colorCode.addEventListener("click" , () => {
        alert("Color code copied : " + colorCode.textContent);
        navigator.clipboard.writeText(colorCode.textContent);
    })
}
launchJavascript();