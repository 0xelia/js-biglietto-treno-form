//DATI CERTI
const pPerKm = 0.21
const saleUnder18 = 0.20
const saleOver65 = 0.40
let sale = 0

// Chiedere all' utente quanti chilometri vuole fare e l'età del passeggero
let km = prompt('Quanti chilometri vuoi fare?')
km = parseInt(km)

let age = parseInt(prompt('Quanti anni hai?'))

if ((isNaN(km)) || (isNaN(age))) {
    alert('perfavore, inserire il numero di chilometri che si desidera percorrere')
}

// Calcolare prezzo base

let floorPrice = (km * pPerKm)

// SE il passeggiero ha un'età < di 18 
if (age < 18){
    // sconto 0.2
    sale = floorPrice * saleUnder18
    let saleElement = document.getElementById('sale')
    saleElement.innerHTML = 'Sconto: ' + sale.toFixed(2) + '€'

// ALTRIMENTI SE ha un'età > di 65
} else if (age > 65) {
    // sconto 0.4
    sale = floorPrice * saleOver65
    saleElement = document.getElementById('sale')
    saleElement.innerHTML = 'Sconto: ' + sale.toFixed(2) + '€'}
    

let price = floorPrice - sale
let salePriceElement = document.getElementById('price_sale')
salePriceElement.innerHTML = 'Prezzo: ' + (price.toFixed(2)) + '€';