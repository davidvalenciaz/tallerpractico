/*En cierta universidad se tiene N cantidad de estudiantes. Elabore un algoritmo que encuentre el promedio de edades de los estudiantes mayores de 21 años y el promedio de edades del resto de estudiantes. Por cada estudiante se tiene un registro que contiene su código y edad*/

let acumEdad = 0;
let contador = 0;
let acum2 = 0;
let contador2 = 0;

for (let i = 1; i <= 5; i++) {
  let edad = Number(prompt("ingrese su edad "));
  if (edad >= 21) {
    acumEdad = acumEdad + edad;
    contador = contador + 1;
  } else {
    contador2 = contador2 + 1;
    acum2 = acum2 + edad;
  }
}

let promedio = acumEdad / contador;
let promedio2 = acum2 / contador2;
alert(
  "el promedio de los mayores de 21 es " +
    promedio +
    " El promedio de los estudiantes menores de 21 es " +
    promedio2
);
