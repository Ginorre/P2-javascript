/*
getal = 10;
res = "";

for(let i = 1; i <= 10; i++) {
    res += i + " x " + getal + "=" + i * getal + "<br>";
}
let uitslag = document.getElementById("output").innerHTML = res;  
*/

function tafel_van(){
    let input = parseInt(document.getElementById("input").value)
res = "";

for(let i = 0; i <= 10; i++) {
   res += i + " x " + input + "=" + i * input + "<br>";
}
let uitslag = document.getElementById("output").innerHTML = res;  
}
