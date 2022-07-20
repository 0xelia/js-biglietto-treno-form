// let random = (Math.random().toFixed(2));
// console.log(random)

//DATI CERTI
const pPerKm = 0.21
const saleUnder18 = 0.20
const saleOver65 = 0.40

// Chiedere all' utente quanti chilometri vuole fare e l'età del passeggero
let km = prompt('Quanti chilometri vuoi fare?')
km = parseInt(km)
console.log(km)
let = age = parseInt(prompt('Quanti anni hai?'))
console.log(age)

// if (isNaN) {
//     console.log('perfavore, inserire il numero di chilometri che si desidera percorrere')
// }

// Calcolare prezzo base
let floorPrice = (km * 0.21.toFixed(2))
console.log(floorPrice)

// SE il passeggiero ha un'età < di 18 
if (age < 18){
    // sconto 0.2
    floorPrice = km - (km * 0.20)
    console.log('Prezzo scontato under 18 ' + floorPrice + '€') 
// ALTRIMENTI SE ha un'età > di 65
} else if (age > 65) {
    // sconto 0.4
    floorPrice = km - (km * 0.40)
    console.log('Prezzo scontato over 65 ' + floorPrice + '€')
}
    

    
