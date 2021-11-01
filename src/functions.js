function addToChart(quantity, prductName = "Elma") {
    console.log("Sepete eklendi : ürün : "+ prductName + " adet : " + quantity)
}

// addToChart("Elma")
addToChart(10)
// addToChart("Karpuz")
// addToChart(15)


let sayHello = () => {
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();