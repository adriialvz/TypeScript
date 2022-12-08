
                                            //SI QUEREMOS USAR LA CLASE EN OTROS FICHEROS DE "TS", DEBEMOS DE USAR LA PALABRA "export" 
class Persona {


    //PROPIEDADES
    private _atributo;
    private _nombre: string;
    private _edad: number;
    public static numeroPersonas : number = 0;      //ATRIBUTO ESTATICO

    //CONSTRUCTOR CARGADO
    constructor(){
        this._nombre= "";
        this._edad= 0;
    }


    //SETTER ----> CAMBIAN VALOR Y IMPRIMEN DENTRO
    //GETTER ----> IMPRIMEN VALOR Y IMPRIMEN FUERA
    public get atributo() {
        return this._atributo;
    }
    public set atributo(value) {
        this._atributo = value;
    }
    

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }


    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }


   //MÉTODOS
    public saludar(){
        return `Hola me llamo ${this._nombre} y tengo ${this._edad} años`;
    }

    public esMayor(p : Persona): Persona{
        if(this._edad > p._edad){
            return this
        }else if( p._edad > this._edad){
            return p
        }else{
            return this
        }
    }
}



//CREAMOS OBJETOS O INSTANCIAS
var persona1 : Persona = new Persona();
var persona2 = new Persona();

console.log("El tipo de la variable es: " + typeof(persona1));


//CAMBIAMOS VALOR CON EL SETTER
persona1.nombre = "Steve Rogers";
persona1.edad = 45;

persona2.nombre = "Tony Stark";
persona2.edad = 50;


//ACCEDEMOS A LOS VALORES GETTER
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona2.nombre)
console.log(persona2.edad)


//Los atributos estáticos se acceden a través de su clase, incluso dentro de la propia clase
Persona.numeroPersonas = 2;
console.log(Persona.numeroPersonas)


//Imprimimos la persona entera, por defecto lo saca con formato muy parecido a JSON
console.log(persona1)//Persona { _nombre: 'Steve Rogers', _edad: 45 }

//también podemos invocar a sus métodos públicos desde fuera
console.log(persona1.saludar())
var personaMayor = persona1.esMayor(persona2)
console.log(personaMayor.nombre)

//Operador "?", operador de acceso seguro
console.log("Operador '?'")
//persona1 = null            /ERROR CON NULL


//Si queremos hacer un acceso seguro, podemos usar el operador '?'
//y así no nos parará el programa
console.log(persona1?.edad)//undefined



//---------------------------------------------------------------------------------------------------------------->
//---------------------------------------------------------------------------------------------------------------->
//---------------------------------------------------------------------------------------------------------------->
//---------------------------------------------------------------------------------------------------------------->



class Pelicula {

   //CREACION DE PROPIEDADES EN EL CONSTRUCTOR
    constructor(private _titulo : string, private _director : string){
        this._titulo = _titulo;
        this._director = _director;
    }

    //GETTER Y SETTER
    public get titulo() : string {
        return this._titulo
    }

    public set titulo(titulo : string){
        this._titulo = titulo
    }

    public get director() : string{
        return this._director
    }
}


//INSTANCIA O OBJETO
var pelicula : Pelicula = new Pelicula("La vida de Brian", "Terry Jones")
pelicula.titulo = "Los caballeros de la mesa cuadrada"
console.log(pelicula.titulo)


//HERENCIA
class Empleado extends Persona{
    private _salario: number;

    constructor(){
        super();                    //CON SUPER()
        this._salario = 0
    }

    //SETTER Y GETTER
    public get salario(): number {
        return this._salario;
    }
    public set salario(value: number) {
        this._salario = value;
    }

    //SOBREESCRIBIR MÉTODOS
    public saludar(): string {
        return `Hola me llamo ${this.nombre}, tengo ${this.edad} años y gano ${this._salario}`;
    }
}

var empleado1 : Empleado = new Empleado()
empleado1.nombre = "Peter"
empleado1.edad = 22
empleado1.salario = 25000

console.log(empleado1.saludar())
console.log("El tipo de la variable es: " + typeof(empleado1))
console.log(empleado1)


var persona3 : Persona = empleado1;
console.log("Polimorfismo: la referencia es de persona pero se ejecuta el metodo del objeto empleado")
console.log(persona3.saludar())

//empleado1 = persona1            //ERROR


//INTERFACES
console.log("INTERFACES")
interface Movible{
    moverse();
    moverseMetros(metros : number)
}

//LAS CLASES ABSTRACTAS NO PUEDEN SER INSTANCIADAS
abstract class Vehiculo implements Movible{
    

    //PROPIEDADES
    private _metros: number;


    //CONSTRUCTOR
    constructor(){
        this._metros = 0;
    }

   //MÉTODOS DE LA INTERFACE
    public moverse() {
        console.log("Me muevo 10 metros")
        this._metros += 10;
    }
    
    public moverseMetros(metros: number) {
        console.log(`Me muevo ${metros} metros`)
        this._metros += metros;
    }

    //GETTER Y SETTER
    public get metros(): number {
        return this._metros;
    }
    public set metros(value: number) {
        this._metros = value;
    }

    //MÉTODO ABSTRACTO
    public abstract tocarBocina();
}

class Coche extends Vehiculo{            //HEREDA DE VEHICULO
    public tocarBocina() {
        console.log("Pi! Pi!");
    }
}

class Barco extends Vehiculo{            //HEREDA DE VEHICULO
    public moverse() {
        console.log("Estoy navegando 20 metros")
        this.metros += 20;
    }
    
    public moverseMetros(metros: number) {
        console.log(`Estoy navegando ${metros} metros`)
        this.metros += metros;
    }

    public tocarBocina() {
        console.log("Moc! Moc!");
    }
}




var vehiculo1 : Vehiculo = new Coche();
vehiculo1.moverse();
vehiculo1.tocarBocina();
console.log(vehiculo1)



if(vehiculo1 instanceof Coche){
    console.log("Es un objeto de tipo coche")
}else{
    console.log("No es un coche :(")
}


vehiculo1 = new Barco();
vehiculo1.moverse();
vehiculo1.tocarBocina();
console.log(vehiculo1)

if(vehiculo1 instanceof Barco){
    console.log("Es un objeto de tipo barco")
}else{
    console.log("No es un barco :(")
}


var vehiculo2 = new Coche();
vehiculo2.moverse();


