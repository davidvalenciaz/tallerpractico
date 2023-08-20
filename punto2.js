let buy = prompt("ingrese el articulo de compra")


if (buy === "moto" || buy === "carro"){
    alert ("su descuento es del 15 %")
}else if (buy === "bicicleta" || buy === "patineta"){
    alert ("su descuento es del 10%")

} else {
    alert("su descuento sera del 5%")
}