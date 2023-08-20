/*Desarrollar un algoritmo que permita ingresar las edades de 10 estudiantes. El algoritmo deberá mostrar cuántos estudiantes son mayores de edad y son menores de edad.*/


let cont=0
let cont2= 0



for (let i = 1 ; i <=10 ; i ++){
    let edades = (Number(prompt("ingrese su edad ")))
    if (edades >=18){
        
        cont= cont + 1
    
    } else  {
        cont2 = cont2 + 1

    }
}

alert("la cantidad de mayores de edad es :  " + cont + " y los menores de edad son : " + cont2)