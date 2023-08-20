let quantity = (parseFloat(prompt("ingrese la cantidad de huevos que desea llevar")))
let price = 250
 let total = quantity * price

if (quantity >1 && quantity <= 100){
    alert("el total es de " + total + " con un descuento de 3% , debe pagar "+  (total -(total*0.03)))
}else if (quantity >101 && quantity <=200){
    alert("el total es de " + total + " con un descuento de 5% , debe pagar "+  (total -(total*0.05)))
}else if (quantity >201 && quantity <=300){
    alert("el total es de " + total + " con un descuento de 8% , debe pagar "+  (total -(total*0.08)))
}else {
    alert("el total es de " + total + " con un descuento de 10% , debe pagar "+  (total -(total*0.10)))
}