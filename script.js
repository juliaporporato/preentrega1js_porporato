let nombre = prompt("Ingrese su nombre");
alert("¡Hola " + nombre + "! Bienvenido/a a Viandas Express.");

let opcion;
let opcionMenu;
do {
  opcion = prompt("¿Querés conocer nuestros menús disponibles?\nIngrese SI o NO").toUpperCase()
  if (opcion == "SI"){
    let menu = "Opciones: \n1- Clásico\n2- Light\n3- Gourmet\n0 - Salir";
    opcionMenu = Number(prompt(menu));
    if (opcionMenu == 1){
      alert("-Tallarines caseros con salsa bolognesa\n-Albóndigas con puré de papas\n-Calabaza rellena de carne y choclo\n-Pollo relleno con papas al horno\n-Pastel de papa");
    }else if (opcionMenu == 2) {
      alert("-Wok de arroz con verduras y pollo\n-Omelette con arroz yamaní\n-Medallones de legumbres con puré tricolor\n-Milanesas de berenjena con ensalada tibia\n-Pasta integral al pesto");
    }else if (opcionMenu == 3) {
      alert("-Pollo a la crema de verdeo con papas\n-Sorrentinos de jamón y queso con crema de calabaza\n-Cerdo agridulce al horno con manzanas, puré de batatas y miel\n-Burger de carne casera con calabazas a las finas hierbas\n-Revuelto gramajo completo");
    }else if (opcionMenu == 0) {
      alert("¡Los esperamos en Av. 9 de Julio 3200, Santa Fe!");
      break
    } else {
      alert("Opción incorrecta")
    }
  }else if (opcion == "NO"){
    alert("Esperamos que sigas disfrutando de nuestra web.");
    break
  } else {
    alert ("Opción incorrecta");
  }
} while (opcion != "NO" || opcionMenu !=0);
