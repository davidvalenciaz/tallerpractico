let month = parseInt(prompt("ingrese del 1 al 12 el mes del año "));

switch (month) {
  case 1:
    alert(
      "Enero: Capricornio (del 22 de diciembre al 19 de enero) es un signo de tierra, regido por Saturno. Acuario (del 20 de enero al 18 de febrero) es un signo de aire, regido por Urano."
    );
    break;
  case 2:
    alert(
      "•Febrero: Acuario (del 20 de enero al 18 de febrero) es un signo de aire, regido por Urano. Piscis (del 19 de febrero al 20 de marzo) es un signo de agua, regido por Neptuno."
    );
    break;
  case 3:
    alert(
      "Marzo: Piscis (del 19 de febrero al 20 de marzo) es un signo de agua, regido por Neptuno. Aries (del 21 de marzo al 19 de abril) es un signo de fuego, regido por Marte."
    );
    break;
  case 4:
    alert(
      "Abril: Aries (del 21 de marzo al 19 de abril) es un signo de fuego, regido por Marte. Tauro (del 20 de abril al 20 de mayo) es un signo de tierra, regido por Venus."
    );
    break;
  case 5:
    alert(
      "Mayo: Tauro (del 20 de abril al 20 de mayo) es un signo de tierra, regido por Venus. Géminis (del 21 de mayo al 20 de junio) es un signo de aire, regido por Mercurio."
    );
    break;
  case 6:
    alert(
      "Junio: Géminis (del 21 de mayo al 20 de junio) es un signo de aire, regido por Mercurio. Cáncer (del 21 de junio al 22 de julio) es un signo de agua, regido por la Luna"
    );
    break;
  case 7:
    alert(
      "Julio: Cáncer (del 21 de junio al 22 de julio) es un signo de agua, regido por la Luna. Leo (del 23 de julio al 22 de agosto) es un signo de fuego, regido por el Sol."
    );
    break;
  case 8:
    alert(
      "Agosto: Leo (del 23 de julio al 22 de agosto) es un signo de fuego, regido por el Sol. Virgo (del 23 de agosto al 22 de septiembre) es un signo de tierra, regido por Mercurio."
    );
    break;
  case 9:
    alert(
      "Septiembre: Virgo (del 23 de agosto al 22 de septiembre) es un signo de tierra, regido por Mercurio. Libra (del 23 de septiembre al 22 de octubre) es un signo de aire, regido por Venus"
    );
    break;
  case 10:
    alert(
      "Octubre: Libra (del 23 de septiembre al 22 de octubre) es un signo de aire, regido por Venus. Escorpio (del 23 de octubre al 21 de noviembre) es un signo de agua, regido por Plutón"
    );
    break;
  case 11:
    alert(
      "Noviembre: Escorpio (del 23 de octubre al 21 de noviembre) es un signo de agua, regido por Plutón. Sagitario (del 22 de noviembre al 21 diciembre) es un signo fuego, regido por Júpiter."
    );
    break;
  case 12:
    alert(
      "Diciembre: Sagitario (del 22 noviembre al 21 diciembre) es un signo fuego, regido por Júpiter. Capricornio (del 22 diciembre al 19 enero) es un signo tierra, regido por Saturno"
    );
    break;

  default:
    alert("el no elegiste un mes valido ");
    break;
}
