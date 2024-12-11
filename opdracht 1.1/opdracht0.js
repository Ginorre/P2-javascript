let winkelmand = ['Bananen', 'Whiskey', 'Chips', 'Bonen', 'Aardappelen'];

document.getElementById('opdr1').innerText = "Er zitten " + winkelmand.length + " producten in uw winkelmand.";

document.getElementById('opdr2').innerText = "Uw producten zijn: " + winkelmand.join(", ");

document.getElementById('opdr3').innerText = winkelmand[3] + " staat op de vierde plek in uw winkelmand.";

winkelmand[1] = "Bier";
document.getElementById('opdr4').innerText = "Nieuwe winkelmand: " + winkelmand.join(", ");

function productToevoegen() {
    winkelmand.push("Appels");
    document.getElementById('opdr5').innerText = "Nieuwe winkelmand: " + winkelmand.join(", ");
}

function change() {
    if (winkelmand.length > 1) {
        document.getElementById('opdr6').innerText = "U kunt boodschappen doen.";
    } else {
        document.getElementById('opdr6').innerText = "U heeft niets om te kopen.";
    }
}

function siep() {
    if (winkelmand[4] === "drop") {
        document.getElementById('opdr7').innerText = "U heeft drop in uw winkelmand: " + winkelmand.join(", ");
    } else {
        document.getElementById('opdr7').innerText = "U heeft geen drop.";
    }
}

document.getElementById('opdr8').innerText = winkelmand.join(" ");

winkelmand.splice(0, 2);
document.getElementById('opdr9').innerText = "Oude winkelmand: " + ['Bananen', 'Whiskey', 'Chips', 'Bonen', 'Aardappelen'].join(", ") + "; Nieuwe winkelmand: " + winkelmand.join(", ");

winkelmand.sort();
document.getElementById('opdr10').innerText = "Gesorteerde winkelmand: " + winkelmand.join(", ");