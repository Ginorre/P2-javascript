/*
let output = document.getElementById('output')

for(let i = 1; i <= 100; i++){
    output.innerHTML += i + "<br>";
}
*/
//hoe laat ik de getallen 100 tm 0 te zien
let output = document.getElementById('output')

for(let i = 100; i >= 0; i--){
    output.innerHTML += i + "<br>";
}