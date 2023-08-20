/*Desarrollar un algoritmo que permita ingresar 5 productos de la canasta familiar; nombre del producto y su precio, que al final me muestra cuanto es el subtotal (precio sin iva), cuánto es el iva del 19% y cuál es el total que debe pagar una persona*/


 acum = 0

for (i = 1; i<=5 ; i ++){
    let producto =prompt("ingrese el nombre de su producto ")
    let precio = (Number(prompt("ingrese el precio del producto ")))
    acum = acum + precio 
}

iva = acum*0.19
total = acum + iva

alert( "el subtotal sin iva es de " + acum + " con un iva del "+ iva + " el total a pagar es de "+ total)