
//CON VOID AL FINAL NO DEVUELVE NADAN
function sumarEnConsola(a: number, b:number):void {
    let resultado = a + b;
    console.log(resultado)
}

    console.log("sumarEnConsola")
    sumarEnConsola(10,34);


//SIN VOID AL FINAL DEVUELVE
function sumar(a: number, b:number): number {
    let resultado = a + b;
    return resultado;
}

    console.log("sumar")
    console.log(sumar(4,5))




function sumarConValorOpcional(a: number, b:number, c?: number): number {
    c = c ?? 0            //SI LLEGA UN NUMERO LO COGE, SI NO LLEGA NADA COGE UN CERO
    var resultado = a + b + c;
        return resultado;
}

    console.log("sumarConValorOpcional")
    console.log(sumarConValorOpcional(1,2,3))
    console.log(sumarConValorOpcional(5,2))





function sumarParametrosVariables(...numeros: number[]): number {        //LLEGAN MUCHOS MUNEROS Y LOS SUMA
    var resultado= 0;
    for(var num of numeros){
        resultado += num;
    }
    return resultado;
}

    console.log("sumarParametrosVariables")
    console.log(sumarParametrosVariables(1,2,3))
    console.log(sumarParametrosVariables(1,2))
    console.log(sumarParametrosVariables(1,2,3,4,5))
    console.log(sumarParametrosVariables())






function concatenarNombre(a: string, b:string = "of Duty"): string{
    return a + " " + b;
}

console.log("concatenarNombre")
console.log(concatenarNombre("League","of Legends"))            //League of Legends
console.log(concatenarNombre("Call"))                           //Call of Duty
