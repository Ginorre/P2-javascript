let position = 0;

setInterval(function() {
    let screenWidth = window.innerWidth;
    position += 5; 

    if (position >= screenWidth) {
        position = 0;
    }

    document.getElementById("block").style.left = position + "px";
}, 100);


