//DATI CERTI
const pPerKm = 0.21
const saleUnder18 = 0.20
const saleOver65 = 0.40
let sale = 0
let km = 0
let floorPrice = 0
let age = 20
let name = 'Username'
// Chiedere all' utente il nome, quanti chilometri vuole fare e l'età del passeggero

name = document.querySelector('input[name="username"]')
name = name.value
console.log(name)

// if ((isNaN(km)) || (isNaN(age))) {
//     alert('perfavore, inserire il numero di chilometri che si desidera percorrere')
// }

// // Calcolare prezzo base quanto preme invia

let buttonElement = document.getElementById('button')
buttonElement.addEventListener( 'click', 
function() {

    name = document.querySelector('input[name="username"]')
    name = name.value
    console.log('Username: ' + name)

    age = document.querySelector('select[name="age"]')
    age = age.value
    console.log('Sconto: ' + age)

    km = document.querySelector('input[name="kms"]')
    km = km.value
    floorPrice = (km * pPerKm)
    console.log('Prezzo base: ' + floorPrice)

    if (age == 0.2) {

        sale = floorPrice * saleUnder18
    } else if (age == 0.4) {

        sale = floorPrice * saleOver65}
    
    let finalPrice = floorPrice - sale
    console.log('Prezzo finale: ' + finalPrice) 

} )


