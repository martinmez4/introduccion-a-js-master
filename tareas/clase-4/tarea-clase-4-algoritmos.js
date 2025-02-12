/* //Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).


Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.



Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1
 */
let numero = 10;
while (numero >= 1) {
	console.log(numero);
	numero--;
}

/*
 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99


 
for (let numero = 1; numero <= 100; numero = numero + 2) {
	console.log(numero);
} 


Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63 */
/* 
function tablaDelSiete() {
	let multiplicar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let multiplicador = 7;

	for (let i = 0; i < multiplicar.length; i++) {
		console.log(
			`${multiplicador} x ${multiplicar[i]} = ${multiplicador * multiplicar[i]}`
		);
	}
}

tablaDelSiete();
 */
/* 
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81

 */

/* function tablasDeMultiplicar() {
	let multiplicar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let multiplicador = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	for (let i = 0; i < multiplicador.length; i++) {
		for (let x = 0; x < multiplicar.length; x++) {
			console.log(
				`${multiplicador[i]} x ${multiplicar[x]} = ${
					multiplicador[i] * multiplicar[x]
				}`
			);
		}
	}
}

tablasDeMultiplicar(); */
/* let multiplicador = Number(prompt("Ingresa el multiplicador"));

function tablasDeMultiplicar() {
	let multiplicar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	for (let i = 0; i < multiplicar.length; i++) {
		console.log(
			`${multiplicador} x ${multiplicar[i]} = ${multiplicador * multiplicar[i]}`
		);
	}
}
tablasDeMultiplicar(); */
/*

Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
 */
/* 
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let totalSuma = 0;

for (let i = 0; i < numeros.length; i++) {
	totalSuma = totalSuma + numeros[i];
	console.log(`total suma despues de agregar ${numeros[i]} es: ${totalSuma}`);
}
 */
/*
Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1
*/

/* let numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let totalFactorial = 1;

for (let i = 0; i < numeros.length; i++) {
	totalFactorial *= numeros[i];
	console.log(
		`despues de multiplicar por ${numeros[i]}, el resultado es: ${totalFactorial}`
	);
}
 */
/*
Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
*/

/* let inicio = 11;
let final = 29;
let total = 0;

for (let i = inicio; i < final; i++) {
	if (i % 2 !== 0) {
		total = total + i;
	}
}

console.log(`La suma total es ${total}`); */

/*
Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
*/
/* 
let gradosCelcius = Number(prompt("ingresa la temperatura en grados celcius."));

function celciusAFahrenheit(gradosCelcius) {
	return gradosCelcius * 1.8 + 32;
}

console.log(
	`La temperatura en Fahrenheit es de ${celciusAFahrenheit(gradosCelcius)}`
);
 */
/*
Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
*/
/* 
let gradosFahrenheit = Number(prompt("Ingresa la temperatura en fahrenheit"));

function fahrenheitACelsius(gradosFahrenheit) {
	return ((gradosFahrenheit - 32) * 5) / 9;
}

console.log(
	`La temperatura en Celcius es de ${fahrenheitACelsius(gradosFahrenheit)}`
); */

/*
Desafío de programación #10: Calcula la suma de todos los números en un array de números
*/
/* 
let numeros = [5, 10, 5, 20, 5];
let total = 0;

for (let i = 0; i < numeros.length; i++) {
	total += numeros[i];
}

console.log(`La suma de todos los numeros del array es ${total}`);
 */
/*
Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
*/
//let total = 0;

/* function calcularPromedio() {
	let notas = [10, 6, 5, 7,5];
	let total = 0;

	for (let i = 0; i < notas.length; i++) {
		total = total + notas[i];
	}
	let promedio = total / notas.length;
	return promedio;
}

console.log(calcularPromedio()); */
/*
Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
*/

/* let numeros = [-1, -2, -3, 0, 1, 2, 3];

function filtrarNumeros() {
	return numeros.filter((numero) => numero > 0);
}
console.log(filtrarNumeros());
 */
/*
Desafío de programación #13: Busca el numero más grande en un array de numeros
*/
/* 
function encontrarMaximo() {
	let numeros = [6, 5, 1, 567, 53234, 5331];
	let maximo = numeros[0];

	for (let i = 1; i < numeros.length; i++) {
		if (maximo < numeros[i]) {
			maximo = numeros[i];
		}
	}
	return maximo;
}

console.log(`El numero más grande del array es ${encontrarMaximo()}`); */

/* 
let numeros = [
	2, 5, 6, 4, 32, 45, 2, 34, 3243445, 123213, 524334, 532, 421324, 231231,
];

let numeroMayor = Math.max(...numeros);

console.log(`El numero más grande del array es ${numeroMayor}`);
 */
/*

Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/
// Número de términos en la secuencia de Fibonacci que quieres generar
/* 
let numeroUno = 0;
let numeroDos = 1;
let objetivo = 10;

console.log(numeroUno);
console.log(numeroDos);

for (let i = 1; i < objetivo; i++) {
	let proximo = numeroUno + numeroDos;
	console.log(proximo);

	numeroUno = numeroDos;
	numeroDos = proximo;
} */

/*
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/
/* let numero = Number(prompt("Ingresa el numero N que deseas encontrar!"));

function fibonacci(numero) {
	if (numero <= 1) {
		return numero;
	}
	return fibonacci(numero - 1) + fibonacci(numero - 2);
}

console.log(`El numero en esa posicion es ${fibonacci(numero)}`); */

/*
Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

*/
/* 
let numero = 19;

function esPrimo(numero) {
	if (numero <= 1) {
		return false; // Los números menores o iguales a 1 no son primos
	}
	if (numero === 2) {
		return true; // El número 2 es primo
	}
	if (numero % 2 === 0) {
		return false; // Los números pares mayores a 2 no son primos
	}

	// Verifica divisores desde 3 hasta la raíz cuadrada del número
	for (let i = 3; i <= Math.sqrt(numero); i += 2) {
		if (numero % i === 0) {
			return false; // Si encuentra un divisor, no es primo
		}
	}

	return true; // Si no encontró divisores, es primo
}

console.log(`${esPrimo(numero)}`);
 */
/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10
   */
/* 
let numeros = 12345;
let numerosArray = numeros.toString().split("").map(Number);

let total = 0;
for (let i = 0; i < numerosArray.length; i++) {
	total += numerosArray[i];
}

console.log(total); */

/*

Desafío de programación #18: Imprimir los primeros 100 números primos

*/
// Los números menores o iguales a 1 no son primos.
// Los números pares mayores que 2 no son primos.
// 2 es primo.
// Verificamos si tiene divisores entre 3 y la raíz cuadrada del número.
// Si no tiene divisores, es primo.

/* function verificarSiEsPrimo(numero) {
	if (numero <= 1) return false; //porque los numeros iguales o menores a uno no son primos.
	if (numero === 2) return true; //porque 2 es un numero primo
	if (numero % 2 === 0) return false; //porque los numeros primos solo son divisibles por 1 y por si mismos.

	for (let i = 3; i < Math.sqrt(numero); i = i + 2) {
		if (numero % i === 0) return false; //porque si es divisible por algun numero entre 2 y su raiz cuadrada, no es primo.
	}
	return true;
}

function imprimirNumerosPrimos(total) {
	let contador = 0;
	let numero = 2;

	while (contador < total) {
		if (verificarSiEsPrimo(numero)) {
			console.log(numero);
			contador = contador + 1;
		}
		numero = numero + 1;
	}
}
imprimirNumerosPrimos(10); */

/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
  */
/* 
function verificarSiEsPrimo(numero) {
	if (numero <= 1) return false;
	if (numero === 2) return true;
	if (numero % 2 === 0) return false;

	for (let i = 3; i < Math.sqrt(numero); i = i + 2) {
		if (numero % i === 0) return false;
	}
	return true;
}

function primoMayorQue(numeroInicial, cantidad) {
	let contador = 0;
	let numero = numeroInicial + 1;
	while (contador < cantidad) {
		if (verificarSiEsPrimo(numero)) {
			console.log(numero);
			contador++;
		}
		numero++;
	}
}

primoMayorQue(7, 10); */

/*
Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
  */
/* 
function rotar(array) {
	if (array.length > 1) {
		let indice = array.shift();
		array.push(indice);
	}
	return array;
}

console.log(rotar([4, 1, 2, 3])); */
/*
Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]
*/
/* 
function rotar(array) {
	if (array.length > 1) {
		let z = array.pop();
		array.unshift(z);
	}
	return array;
}

console.log(rotar([2, 3, 4, 1])); */

/*
Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
*/
/* 
function invertirArray(array) {
	return array.reverse();
}

console.log(invertirArray([4, 3, 2, 1]));
 */
/*
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
*/
/* function invertirStrings(strings) {
	let array = strings.split("");
	array.reverse();
	return array.join("");
}

let texto = "holaa, como estas? cual es tu nombre?";

console.log(invertirStrings(texto)); */

/*
Desafío de programación #24: Crear una función que reciba dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
*/
/* 
function unirArrays(arrayUno, arrayDos) {
	return arrayUno.concat(arrayDos);
}
let arrayUno = [1, 2, 3];
let arrayDos = ["a", "b", "c"];

console.log(unirArrays(arrayUno, arrayDos)); */
/*
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos
*/
function diferenciaSimetrica(array1, array2) {
	// Convertir los arrays a conjuntos para facilitar la comparación
	const set1 = new Set(array1);
	const set2 = new Set(array2);

	// Encontrar los elementos que están en set1 pero no en set2
	const soloEnSet1 = [...set1].filter((element) => !set2.has(element));

	// Encontrar los elementos que están en set2 pero no en set1
	const soloEnSet2 = [...set2].filter((element) => !set1.has(element));

	// Combinar los resultados
	return [...soloEnSet1, ...soloEnSet2];
}

console.log(diferenciaSimetrica([1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 11]));
/*
// Ejemplos de uso:
console.log(diferenciaSimetrica([1, 2, 3], [3, 7, 11])); // [1, 2, 7, 11]
console.log(diferenciaSimetrica([5, 10, 3], [10, 1])); // [5, 3, 1]


Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)


 */
