function addToChart(quantity, prductName = "Elma") {
  console.log("Sepete eklendi : ürün : " + prductName + " adet : " + quantity);
}

// addToChart("Elma")
addToChart(10);
// addToChart("Karpuz")
// addToChart(15)

let sayHello = () => {
  console.log("Hello World!");
};

sayHello();

let sayHello2 = function () {
  console.log("Hello World 2");
};

sayHello2();

function addToCart2(productName, quantity, uniPrice) {}

addToCart2("Elma", 5, 10);
addToCart2("Armut", 2, 20);
addToCart2("Limon", 3, 15);

let product1 = { prductName: "Elma", uniPrice: 10, quantity: 5 };
function addToCart3(product) {
  console.log("Ürün :" + product.prductName);
  console.log("Adet :" + product.quantity);
  console.log("Fiyat :" + product.uniPrice);
}
addToCart3(product1);

let product2 = { prductName: "Elma", uniPrice: 10, quantity: 5 };
let product3 = { prductName: "Elma", uniPrice: 10, quantity: 5 };

product2 = product3;
product2.prductName = "Karpuz";
console.log(product3.prductName);

function addToCart4(products) {
  console.log(products);
}

let products = [
  { prductName: "Elma", uniPrice: 10, quantity: 5 },
  { prductName: "Elma", uniPrice: 10, quantity: 5 },
  { prductName: "Elma", uniPrice: 10, quantity: 5 },
];

addToCart4(products);

// function add(number1, number2) {
//     console.log(number1 + number2)
// }

// function add2(number1, number2, number3) {
//     console.log(number1 + number2 + number3)
// }

// function add3(number1, number2, number3, number4) {
//     console.log(number1 + number2 + number3 + number4)
// }


// Bir fonksiyonda degiskenin önüne ... koyarsak buna rest operatörü diyoruz
// Rest operatörünü her zaman sondaki parametrede kullanmak gerekir. 
function add(bisey,...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)  
}

add(20, 30);
// add(20, 30, 40);
// add(20, 30,40, 50);

let numbers = [30, 10, 500, 600, 120]
// bu örnekte ... spread operatörü olarak kullanildi, dizideki elemanlari ayirmaya yaradi
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    {name:"ic anadolu", population:"20M"}, 
    {name:"marmara", population:"30M"}, 
    {name:"karadeniz", population:"10M"},
    [
        ["Ankara", "Konya"],
        ["Istanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
]

console.log(icAnadolu.name)
console.log(marmara.population)
console.log(icAnadoluSehirleri)
console.log(karadenizSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = { productName: "Elma", unitPrice: 10, quantity: 5 })

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
