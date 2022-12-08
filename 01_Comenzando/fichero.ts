


var saludo : string = "Hola Mundo!";

document.write(saludo);

//CREAMOS UN NODO ELEMENTO H1
var cabeceraH1 = document.createElement('H1');
cabeceraH1.textContent = saludo;
document.body.appendChild(cabeceraH1);
