let position = 0;
const div = document.querySelector('#block')
let vertical = 0


const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
div.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    div.style.backgroundColor = colors[randomIndex];
});

window.addEventListener("keydown", function(event){
    if(event.key == 'd'){
        position+= 10
        div.style.left = position + "px"
    }

    if(event.key == 'a'){
        position -= 10
        div.style.left = position + "px"
    }

    if(event.key == 'w'){ 
        vertical -=10
        div.style.top = vertical + 'px' }
    
    if(event.key == 's'){ 
        vertical += 10
        div.style.top = vertical + 'px'
    }


})