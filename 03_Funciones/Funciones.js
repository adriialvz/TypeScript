//CON VOID AL FINAL NO DEVUELVE NADAN
function sumarEnConsola(a, b) {
    let resultado = a + b;
    console.log(resultado);
}
console.log("sumarEnConsola");
sumarEnConsola(10, 34);
//SIN VOID AL FINAL DEVUELVE
function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}
console.log("sumar");
console.log(sumar(4, 5));
function sumarConValorOpcional(a, b, c) {
    c = c !== null && c !== void 0 ? c : 0; //SI LLEGA UN NUMERO LO COGE, SI NO LLEGA NADA COGE UN CERO
    var resultado = a + b + c;
    return resultado;
}
console.log("sumarConValorOpcional");
console.log(sumarConValorOpcional(1, 2, 3));
console.log(sumarConValorOpcional(5, 2));
function sumarParametrosVariables(...numeros) {
    var resultado = 0;
    for (var num of numeros) {
        resultado += num;
    }
    return resultado;
}
console.log("sumarParametrosVariables");
console.log(sumarParametrosVariables(1, 2, 3));
console.log(sumarParametrosVariables(1, 2));
console.log(sumarParametrosVariables(1, 2, 3, 4, 5));
console.log(sumarParametrosVariables());
function concatenarNombre(a, b = "of Duty") {
    return a + " " + b;
}
console.log("concatenarNombre");
console.log(concatenarNombre("League", "of Legends")); //League of Legends
console.log(concatenarNombre("Call")); //Call of Duty
