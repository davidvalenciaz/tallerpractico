let numeros = parseInt(prompt("ingrese el numero del mes entre el  1 al 12"));

switch (numeros) {
  case 1:
    console.log("enero tiene 31 dias");
    break;
  case 2:
    console.log("febrero tiene 29 dias");
    break;
  case 3:
    console.log("marzo tiene 31 dias");
    break;
  case 4:
    console.log("abril tiene 30 dias");
    break;
  case 5:
    console.log("mayo  tiene 31 dias");
    break;
  case 6:
    console.log("junio tiene 30 dias");
    break;
  case 7:
    console.log("julio tiene 31 dias");
    break;
  case 8:
    console.log("agosto  tiene 31 dias");
    break;
  case 9:
    console.log("septiembre  tiene 30 dias");
    break;
  case 10:
    console.log("octubre tiene 31 dias");
    break;
  case 11:
    console.log("noviembre tiene 3 dias");
    break;
  case 12:
    console.log("diciembretiene 31 dias");
    break;
    default: console.log("ingresaste un numero incorrecto ");
    break;
}
