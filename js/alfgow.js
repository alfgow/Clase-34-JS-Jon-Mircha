console.warn(`%c Ejercicios de Lógica de Programación`, "color: yellow");

console.log(
	` %c Ejercicio 1: Programa una función que cuente el número de caracteres de una cadena de texto
  
  definire la funcion de la siguiente manera
  
function contarCaracteres(a) {
	typeof a === "string"
		? console.log('La Expresion tiene \${a.length} caractéres')
		: console.log('La expresion \${a} no es String');
}

contarCaracteres(a);

  `,
	"color: red"
);

// Declaramos la funcion usando el operador ternario
function contarCaracteres(a) {
	typeof a === "string"
		? console.log(
				`La Expresion "${a}" tiene ${a.length} caractéres`
		  )
		: console.log(`La expresion "${a}" no es String`);
}

// Comenzamos con lo basico, una cadena de texto
let nombre = "Hola Soy alfgow ";
contarCaracteres(nombre);

//Ahora intentaremos con un numero
let numero = 210512;
contarCaracteres(numero);

// Ahora declararemos la  funcion suma, despues transformaremos el resultado a string y contaremos los caracteres
function sumar(a, b) {
	return a + b;
}
let resultadoSuma = sumar(498671, 65498731).toString();
contarCaracteres(resultadoSuma);

/* ----------------    Ejercicio 2 ----------------------------*/
console.log(
	`%c Ejercicio 2: Programa una función que te devuelva el texto recortado según el número de caracteres indicados
  
  // Declaramos la funcion
function cortarCadena(c, d) {
	typeof c === "string"
		? console.log(
				'Divideremos la expresion \${c} en el espacio \${d}, esto nos dara: \${c.slice(
					d
				)}'
		  )
		: console.log('La expresion \${c} no es String');
}
  
  `,
	"color: red"
);

// Declaramos la funcion
function cortarCadena(c, d) {
	typeof c === "string"
		? console.log(
				`Divideremos la expresion "${c}" en el espacio ${d}, esto nos dara: ${c.slice(
					d
				)}`
		  )
		: console.log(`La expresion "${c}" no es String`);
}

// Utilizaremos la funcion con dos ejemplos
cortarCadena(nombre, 5);
cortarCadena(numero, 2);

/* ----------------    Ejercicio 3 ----------------------------*/

console.log(
	`%c Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter
  
// Declaramos la funcion
function dividirCadena(e, f) {
	typeof e === "string"
		? console.log(
				'Divideremos la expresion "\${e}" en el siguiente punto: \${f}, esto nos dara: \${e.split(
					f
				)}'
		  )
		: console.log('La expresion "\${e}" no es String');
}
  
  `,
	"color:red"
);

// Declaramos la funcion
function dividirCadena(e, f) {
	typeof e === "string"
		? console.log(
				`Divideremos la expresion "${e}" en el siguiente punto: ${f}, esto nos dara: ${e.split(
					f
				)}`
		  )
		: console.log(`La expresion "${e}" no es String`);
}

const noLorem = "Hola que hace";

dividirCadena(noLorem, " ");

/* ----------------    Ejercicio 4 ----------------------------*/

console.log(
	`%c Programa una función que repita un texto X veces



`,
	"color:red"
);

// Declaramos la funcion
function repetirCadena(g, h) {
	typeof g === "string"
		? console.log(
				`Repetiremos la expresion "${g}" ${h} veces, esto nos dara: ${g.repeat(
					h
				)}`
		  )
		: console.log(`La expresion "${g}" no es String`);
}

repetirCadena(nombre, 3);
