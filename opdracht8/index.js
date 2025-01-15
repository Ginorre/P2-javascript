let block = document.getElementById("block");
let positionX = 0;
let positionY = 0;

document.addEventListener('keydown', function(event) {
    const key = event.key; 

    
    if (key === "ArrowRight") {
        positionX += 10;  
    } else if (key === "ArrowLeft" ) {
        positionX -= 10;  
    } else if (key === "ArrowUp" ) {
        positionY -= 10;
    } else if (key === "ArrowDown") {
        positionY += 10;
    }

    
    block.style.left = positionX + "px";
    block.style.top = positionY + "px";
});