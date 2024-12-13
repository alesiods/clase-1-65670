
// Que es React?

//Es libreria de JS.

//¿cuando nace?
//Mayo del 2013 en las oficinas de Facebook.

//¿cuales sn las ventajas?

//1) Crear aplicaicones web muchos mas rapidas. Gracias a la tecnica del Virtual DOM que me permite actualizar algunas partes de mi aplicacion sin recargar toda la pagina

//2) Basado en componentes: son conjuntos de elemntos que cumplen una funcion especifica (ejemplo: un botón)

//3) Tiene un enfoque declarativo: estilo de progrmacion en donde nos enfocamos en lo que quiero lograr y no tanto en el como.

//Enfoque imperativo: un estilo de programacion en donde se detallan paso a paso las acciones a realizar para lograr un resultado especifico. Ejemplo: JS



///////////////////////////////////////////

//REPASO

//Expresiones en JS:

//Es una combinacion de valores, variables y operadores que pueden ser evaluados para producri un resultado

let numero = 5

let suma = numero + 5

console.log(typeof(4))


//Funciones en JS:

//Es un bloque de instrucciones con una tarea especifica que puede ser reutilizado muchas veces.

//puede ser DECLARADAS O EXPRESADAS
console.log(sumamos(50,10))

function sumamos (numeroUno, numeroDos) {
    //cuerpo de la funcion
    return numeroUno + numeroDos
}


//una funcion declarada se puede invocar antes de su declaracion debido a el moto de JS que las lee antes de ejecutar el código, y esto se lo conoce como hoisting.


//FUNCION ANONIMA:

const sumaDos= function(numeroUno,numeroDos) {
    return numeroUno + numeroDos
}

console.log(sumaDos(80,10))


//FUNCION FLECHA:
//Es una version resumida de la funcion anónima.

const sumaTres = (numeroUno, numeroDos) => numeroUno + numeroDos;

console.log(sumaTres(90,10))

const sumaCuatro = () => 10+ 10

console.log(sumaCuatro())



//Trabajamos por modulos:
//Es una forma de dividir nuestro trabajo o codigo en partes mas pequeñas

//Lo logramos utilizando las palabras "export" e "import"


