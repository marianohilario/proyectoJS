let total = 0;
let categoria;
let producto;
let decision;
let seguirComprando = true;

const interes3 = 0.1;
const interes6 = 0.35;
const interes12 = 0.7;

const productosArray = [];

class NewProduct {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

const fanal = new NewProduct(1, "Fanal", 500);
productosArray.push(fanal);
const aromatizante = new NewProduct(2, "Aromatizante", 600);
productosArray.push(aromatizante);
const flotante = new NewProduct(3, "Flotante", 400);
productosArray.push(flotante);
const difusor = new NewProduct(4, "Difusor", 1000);
productosArray.push(difusor);
const esencias = new NewProduct(5, "Esencias", 200);
productosArray.push(esencias);
const tapiz = new NewProduct(6, "Tapiz", 1200);
productosArray.push(tapiz);
const mantel = new NewProduct(7, "Mantel", 900);
productosArray.push(mantel);

console.log(productosArray[0].price);

while (seguirComprando === true || producto === 0) {
  categoria = parseInt(prompt("Escoja una categoría:\n 1 - Velas\n 2 - Aromatizantes\n 3 - Textiles\n 0 - Salir"));
  if (categoria === 0) {
    alert("Programa finalizado");
    break;
  } else if (categoria === 1) {
    producto = parseInt(prompt("Escoja un producto:\n 1 - Fanal ($500)\n 2 - Aromatizante ($600)\n 3 - Flotante ($400)\n 0 - Volver al menú anterior"));
    if (producto === 0) {
      seguirComprando = false;
    }
    while (seguirComprando === true) {
      total = total + productosArray[producto - 1].price;
      decision = parseInt(prompt(`El total gastado hasta el momento es de $ ${total}.\nQuiere seguir comprando?\n 1 - SI\n 2 - NO`));
      if (decision === 1) {
        producto = parseInt(prompt("Escoja un producto:\n 1 - Fanal ($500)\n 2 - Aromatizante ($600)\n 3 - Flotante ($400)\n 0 - Volver al menú anterior"));
        if (producto === 0) {
          seguirComprando = false;
        }
      } else {
        alert(`Gracias por su compra! El total gastado es de $ ${total}
        1 pago de $ ${total}
        3 pagos de $ ${valorCuotas(total, interes3, 3)}
        6 pagos de $ ${valorCuotas(total, interes6, 6)}
        12 pagos de $ ${valorCuotas(total, interes12, 12)}`);
        seguirComprando = false;
      }
    }
  } else if (categoria === 2) {
    seguirComprando = true;
    producto = parseInt(prompt("Escoja un producto:\n 1 - Difusor ($1000)\n 2 - Esencias ($200)\n 0 - Volver al menú anterior"));
    if (producto === 0) {
      seguirComprando = false;
    }
    while (seguirComprando === true) {
      total = total + productosArray[producto + 2].price;
      decision = parseInt(prompt(`El total gastado hasta el momento es de $ ${total}.\nQuiere seguir comprando?\n 1 - SI\n 2 - NO`));
      if (decision === 1) {
        producto = parseInt(prompt("Escoja un producto:\n 1 - Difusor ($1000)\n 2 - Esencias ($200)\n 0 - Volver al menú anterior"));
        if (producto === 0) {
          seguirComprando = false;
        }
      } else {
        alert(`Gracias por su compra! El total gastado es de $ ${total}
        1 pago de $ ${total}
        3 pagos de $ ${valorCuotas(total, interes3, 3)}
        6 pagos de $ ${valorCuotas(total, interes6, 6)}
        12 pagos de $ ${valorCuotas(total, interes12, 12)}`);
        seguirComprando = false;
      }
    }
  } else if (categoria === 3) {
    seguirComprando = true;
    producto = parseInt(prompt("Escoja un producto:\n 1 - Tapiz ($1200)\n 2 - Mantel ($900)\n 0 - Volver al menú anterior"));
    if (producto === 0) {
      seguirComprando = false;
    }
    while (seguirComprando === true) {
      total = total + productosArray[producto + 4].price;
      decision = parseInt(prompt(`El total gastado hasta el momento es de $ ${total}.\nQuiere seguir comprando?\n 1 - SI\n 2 - NO`));
      if (decision === 1) {
        producto = parseInt(prompt("Escoja un producto:\n 1 - Tapiz ($1200)\n 2 - Mantel ($900)\n 0 - Volver al menú anterior"));
        if (producto === 0) {
          seguirComprando = false;
        }
      } else {
        alert(`Gracias por su compra! El total gastado es de $ ${total}
        1 pago de $ ${total}
        3 pagos de $ ${valorCuotas(total, interes3, 3)}
        6 pagos de $ ${valorCuotas(total, interes6, 6)}
        12 pagos de $ ${valorCuotas(total, interes12, 12)}`);
        seguirComprando = false;
      }
    }
  }
}

function valorCuotas(valor, tasa, cuotas) {
  let resultado = (valor * (1 + tasa)) / cuotas;
  let total = resultado.toFixed(2);
  return total;
}
