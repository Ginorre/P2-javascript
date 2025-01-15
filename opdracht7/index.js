let position = 0;
let colors = ['red', 'blue', 'green', 'yellow', 'purple'];

const block = document.getElementById("block");


setInterval(function () {
    let screenWidth = window.innerWidth;
    position += 5;

    if (position >= screenWidth) {
        position = 0;
    }

    block.style.left = position + "px";
}, 100);


block.addEventListener('click', function () {

    let currentColor = block.style.backgroundColor;
    let newColor;


    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);


    block.style.backgroundColor = newColor;
});