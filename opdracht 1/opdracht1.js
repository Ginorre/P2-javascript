//dit is een array of te wel een mapje waarin alles vermzamelt wordt
let sod1b  = ["Arda" , "Luke" , "Stephen" , "Azam", "Thygo"];
console.log(sod1b)

//aanmaken van een lege array
let sod1a = [];


sod1a.push("mike")
console.log(sod1a)

console.log(sod1b[1])


//zorg ervoor dat de volgende teskt op het scherm komt
//Azam is een student uit sod1b

document.getElementById("output").innerText = sod1b[3] + " is een student uit sod1b"

//laat nu op het scherm de volgende tekst zien:
// "Er zitten 5 studenten in mijn klas"
 
document.getElementById("output").innerText = " er zitten " + sod1b.length + " studenten in de klas"