//SI QUEREMOS USAR LA CLASE EN OTROS FICHEROS DE "TS", DEBEMOS DE USAR LA PALABRA "export" 
class Persona {
    //CONSTRUCTOR CARGADO
    constructor() {
        this._nombre = "";
        this._edad = 0;
    }
    //SETTER ----> CAMBIAN VALOR Y IMPRIMEN DENTRO
    //GETTER ----> IMPRIMEN VALOR Y IMPRIMEN FUERA
    get atributo() {
        return this._atributo;
    }
    set atributo(value) {
        this._atributo = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    //MÉTODOS
    saludar() {
        return `Hola me llamo ${this._nombre} y tengo ${this._edad} años`;
    }
    esMayor(p) {
        if (this._edad > p._edad) {
            return this;
        }
        else if (p._edad > this._edad) {
            return p;
        }
        else {
            return this;
        }
    }
}
Persona.numeroPersonas = 0; //ATRIBUTO ESTATICO
//CREAMOS OBJETOS O INSTANCIAS
var persona1 = new Persona();
var persona2 = new Persona();
console.log("El tipo de la variable es: " + typeof (persona1));
//CAMBIAMOS VALOR CON EL SETTER
persona1.nombre = "Steve Rogers";
persona1.edad = 45;
persona2.nombre = "Tony Stark";
persona2.edad = 50;
//ACCEDEMOS A LOS VALORES GETTER
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona2.nombre);
console.log(persona2.edad);
//Los atributos estáticos se acceden a través de su clase, incluso dentro de la propia clase
Persona.numeroPersonas = 2;
console.log(Persona.numeroPersonas);
//Imprimimos la persona entera, por defecto lo saca con formato muy parecido a JSON
console.log(persona1); //Persona { _nombre: 'Steve Rogers', _edad: 45 }
//también podemos invocar a sus métodos públicos desde fuera
console.log(persona1.saludar());
var personaMayor = persona1.esMayor(persona2);
console.log(personaMayor.nombre);
//Operador "?", operador de acceso seguro
console.log("Operador '?'");
//persona1 = null            /ERROR CON NULL
//Si queremos hacer un acceso seguro, podemos usar el operador '?'
//y así no nos parará el programa
console.log(persona1 === null || persona1 === void 0 ? void 0 : persona1.edad); //undefined
//---------------------------------------------------------------------------------------------------------------->
//---------------------------------------------------------------------------------------------------------------->
//---------------------------------------------------------------------------------------------------------------->
//---------------------------------------------------------------------------------------------------------------->
class Pelicula {
    //CREACION DE PROPIEDADES EN EL CONSTRUCTOR
    constructor(_titulo, _director) {
        this._titulo = _titulo;
        this._director = _director;
        this._titulo = _titulo;
        this._director = _director;
    }
    //GETTER Y SETTER
    get titulo() {
        return this._titulo;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    get director() {
        return this._director;
    }
}
//INSTANCIA O OBJETO
var pelicula = new Pelicula("La vida de Brian", "Terry Jones");
pelicula.titulo = "Los caballeros de la mesa cuadrada";
console.log(pelicula.titulo);
//HERENCIA
class Empleado extends Persona {
    constructor() {
        super(); //CON SUPER()
        this._salario = 0;
    }
    //SETTER Y GETTER
    get salario() {
        return this._salario;
    }
    set salario(value) {
        this._salario = value;
    }
    //SOBREESCRIBIR MÉTODOS
    saludar() {
        return `Hola me llamo ${this.nombre}, tengo ${this.edad} años y gano ${this._salario}`;
    }
}
var empleado1 = new Empleado();
empleado1.nombre = "Peter";
empleado1.edad = 22;
empleado1.salario = 25000;
console.log(empleado1.saludar());
console.log("El tipo de la variable es: " + typeof (empleado1));
console.log(empleado1);
var persona3 = empleado1;
console.log("Polimorfismo: la referencia es de persona pero se ejecuta el metodo del objeto empleado");
console.log(persona3.saludar());
//empleado1 = persona1            //ERROR
//INTERFACES
console.log("INTERFACES");
//LAS CLASES ABSTRACTAS NO PUEDEN SER INSTANCIADAS
class Vehiculo {
    //CONSTRUCTOR
    constructor() {
        this._metros = 0;
    }
    //MÉTODOS DE LA INTERFACE
    moverse() {
        console.log("Me muevo 10 metros");
        this._metros += 10;
    }
    moverseMetros(metros) {
        console.log(`Me muevo ${metros} metros`);
        this._metros += metros;
    }
    //GETTER Y SETTER
    get metros() {
        return this._metros;
    }
    set metros(value) {
        this._metros = value;
    }
}
class Coche extends Vehiculo {
    tocarBocina() {
        console.log("Pi! Pi!");
    }
}
class Barco extends Vehiculo {
    moverse() {
        console.log("Estoy navegando 20 metros");
        this.metros += 20;
    }
    moverseMetros(metros) {
        console.log(`Estoy navegando ${metros} metros`);
        this.metros += metros;
    }
    tocarBocina() {
        console.log("Moc! Moc!");
    }
}
var vehiculo1 = new Coche();
vehiculo1.moverse();
vehiculo1.tocarBocina();
console.log(vehiculo1);
if (vehiculo1 instanceof Coche) {
    console.log("Es un objeto de tipo coche");
}
else {
    console.log("No es un coche :(");
}
vehiculo1 = new Barco();
vehiculo1.moverse();
vehiculo1.tocarBocina();
console.log(vehiculo1);
if (vehiculo1 instanceof Barco) {
    console.log("Es un objeto de tipo barco");
}
else {
    console.log("No es un barco :(");
}
var vehiculo2 = new Coche();
vehiculo2.moverse();
