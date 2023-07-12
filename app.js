function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: No es posible dividir entre cero";
  }
  return a / b;
}

function calcular() {
  var operacion;
  var continuar;

  do {
    operacion = prompt("Elige una operación: suma (+), resta (-), multiplicación (*) o división (/)");
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado;

    switch (operacion) {
      case "+":
        resultado = sumar(num1, num2);
        break;
      case "-":
        resultado = restar(num1, num2);
        break;
      case "*":
        resultado = multiplicar(num1, num2);
        break;
      case "/":
        resultado = dividir(num1, num2);
        break;
      default:
        resultado = "Operación inválida";
    }

    alert("El resultado es: " + resultado);

    continuar = confirm("¿Deseas realizar otra operación?");
  } while (continuar);
}

calcular();
