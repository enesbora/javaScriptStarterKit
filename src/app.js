console.log("Merhaba Kodlama.io")

//JS type safe degildir
let dolarDun = 9.20

let dolarBugun = 9.30

{
    let dolarDun = 9.10
}


console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11 bunu yapamiyoruz

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi", "EMlak konut kredisi", "Kamu Konut Kredisi", "ézel konut kredisi"]

console.log(konutKredileri)

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>");    
} 
console.log("</ul>")


