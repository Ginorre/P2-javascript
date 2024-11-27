// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("BtnCookies");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function Submit(){
    const age = parseInt(leeftijd.value)
    if (age >= 18){
        window.location.href = 'https://www.istockphoto.com/nl/foto/chocolate-chip-cookies-on-a-cooling-rack-with-flaky-salt-served-with-milk-gm1968539124-558289467'
    } else{
        document.body.innerHTML = '<div class="red-screen">Helaas, je bent te jong.</div>'
    }
}