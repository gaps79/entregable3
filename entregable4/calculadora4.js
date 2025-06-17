const realizarOperacion = (num1, num2, operacion) => {
       const op = operacion.toLowerCase();

    if (op === "suma") {
        return (num1 + num2);
    }
    else if (op === "resta") {
        return (num1 - num2);
    }
    else if (op === "multiplicacion") {
        return (num1 * num2);
    }
    else if (op === "division") {
        if (num2 === 0) { 
            return "No es posible realizar una division por cero";
        }
        return (num1 / num2);
    }
    else {
        return "Esta operacion no es valida";
    }
}

let num1_str, num2_str, operacion_str;
let pregunta;
let continuarBucle = true; 

while(continuarBucle) {
    num1_str = prompt("Ingrese el primer numero:");
    // Validar si el usuario presionó "Cancelar" o dejó vacío
    if (num1_str === null || num1_str.trim() === "") {
        console.log("Entrada cancelada o vacía para el primer número. Saliendo...");
        continuarBucle = false;
        break;
    }

    num2_str = prompt("Ingrese el segundo numero:");
    if (num2_str === null || num2_str.trim() === "") {
        console.log("Entrada cancelada o vacía para el segundo número. Saliendo...");
        continuarBucle = false;
        break;
    }
    
    operacion_str = prompt("Ingrese la operacion (suma, resta, multiplicacion, division) o escriba 'salir' para terminar:");
    if (operacion_str === null) { 
        console.log("Operación cancelada. Saliendo...");
        continuarBucle = false;
        break;
    }
    operacion_str = operacion_str.toLowerCase()
    if (operacion_str === "salir") {
        continuarBucle = false;
        console.log("Saliendo de la calculadora...");
        break; 
    }

    
    let num1 = +num1_str;
    let num2 = +num2_str;

    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Uno o ambos números ingresados no son válidos. Intente de nuevo.");
        pregunta = prompt("¿Desea realizar otra operacion? (si/no)");
        if (pregunta && pregunta.toLowerCase() === "si") {
            continue;
        } else {
            continuarBucle = false;
            console.log("Gracias por usar la calculadora! Adios!!\n");
            break;
        }
    }  else {
        let resultadoCalculado = realizarOperacion(num1, num2, operacion_str);
        
            alert("El resultado  es: " + resultadoCalculado); 

      
        pregunta = prompt("¿Desea realizar otra operacion? (si/no)");

    }
}
// Mensaje final si salió por la condición del while o 'salir'
if (!continuarBucle) {
     console.log("Calculadora cerrada.");
}