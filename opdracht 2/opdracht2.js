let output = document.getElementById("output");
let input = document.getElementById("input");

let shop = [];

function add_product(){
    let product = document.getElementById("input").value;
    shop.push(product);
    document.getElementById("output").textContent = shop.join()
}