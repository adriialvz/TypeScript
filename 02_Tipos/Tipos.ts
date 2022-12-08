var nombre1 : string= "Natasha Romanoff";
var numero2 : number= 12;
var numero3= 10;
var numero4;
var verdadero : boolean= true;


const CONSTANTE_NUMERICA : number= 35;


    numero3= 45;
    numero3= 34.56;
    //numero3 = null          //LOS NUMEROS NO ADMITEN 'null'
    //numero3 = undefined     //LOS NUMERICOS NO ADMITEN 'undefined'


//TIPO any, PARA APUNTAR A CULAQUIE TIPO
var variable : any = "Thor"
variable= 5;
variable= false;
variable= null;
variable= undefined;


//ARRAYS
var numeros : number[] = [1,2,3];
var numeros2= [1,2,3];

    numeros[1]= 0;
    numeros2[1]= 4;


    
var numeros3 : Array<number> = [1,2,3];
    console.log(numeros3);

//TUPLAS
var colorRojo: [number, number, number] = [255, 0, 0];

var colorVerde = [0, 255, 0];

colorRojo[2]= 0;
colorVerde[2]= 255;        //NO PODRIAMOS ASIGNAR UN STRING
    console.log(colorRojo);

//TIPO UNION
var numero : number | string;
numero= 5;
numero= "cinco";

