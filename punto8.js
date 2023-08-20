
const numeroDePersonas = Number(prompt("Ingrese el número de personas en el grupo:"));

let personasConHijos = 0;
let personasSinHijos = 0;
let totalHijos = 0;
let contador = 1;

while (contador <= numeroDePersonas) {
    const cantidadHijos = parseInt(prompt("Ingrese el número de hijos de la persona " + contador + ":"));

    if (cantidadHijos > 0) {
        personasConHijos++;
        totalHijos = totalHijos + cantidadHijos;
    } else {
        personasSinHijos++;
    }

    contador++;
}

const promedioHijos = totalHijos / numeroDePersonas;


alert("Personas con hijos: " + personasConHijos+ " Personas sin hijos: " + personasSinHijos + " el promedio de hijos " + promedioHijos)
