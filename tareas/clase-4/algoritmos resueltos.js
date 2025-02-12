// Desafío de programación #1: Imprimí los números del 1 al 10
let numero = 10;
while (numero >= 1) {
	console.log(numero);
	numero--;
}

// Desafío de programación #2: Imprimí los números impares del 1 al 100
for (let numero = 1; numero <= 100; numero = numero + 2) {
	console.log(numero);
}

// Desafío de programación #3: Imprimí la tabla de multiplicación del 7
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

// Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
function tablasDeMultiplicar() {
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
tablasDeMultiplicar();

// Desafío de programación #5: Calcula el resultado de la suma de los números del 1 al 10 en un array
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let totalSuma = 0;

for (let i = 0; i < numeros.length; i++) {
	totalSuma = totalSuma + numeros[i];
	console.log(`total suma después de agregar ${numeros[i]} es: ${totalSuma}`);
}

// Desafío de programación #6: Calcula 10! (10 factorial)
let numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let totalFactorial = 1;

for (let i = 0; i < numeros.length; i++) {
	totalFactorial *= numeros[i];
	console.log(
		`Después de multiplicar por ${numeros[i]}, el resultado es: ${totalFactorial}`
	);
}

// Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
let inicio = 11;
let final = 29;
let total = 0;

for (let i = inicio; i < final; i++) {
	if (i % 2 !== 0) {
		total = total + i;
	}
}

console.log(`La suma total es ${total}`);

// Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
let gradosCelcius = Number(prompt("Ingresa la temperatura en grados Celsius."));

function celciusAFahrenheit(gradosCelcius) {
	return gradosCelcius * 1.8 + 32;
}

console.log(
	`La temperatura en Fahrenheit es de ${celciusAFahrenheit(gradosCelcius)}`
);

// Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
let gradosFahrenheit = Number(prompt("Ingresa la temperatura en Fahrenheit"));

function fahrenheitACelsius(gradosFahrenheit) {
	return ((gradosFahrenheit - 32) * 5) / 9;
}

console.log(
	`La temperatura en Celsius es de ${fahrenheitACelsius(gradosFahrenheit)}`
);

// Desafío de programación #10: Calcula la suma de todos los números en un array de números
let numeros = [5, 10, 5, 20, 5];
let total = 0;

for (let i = 0; i < numeros.length; i++) {
	total += numeros[i];
}

console.log(`La suma de todos los números del array es ${total}`);

// Desafío de programación #11: Calcula el promedio de todos los números en un array de números (en una función)
function calcularPromedio() {
	let notas = [10, 6, 5, 7, 5];
	let total = 0;

	for (let i = 0; i < notas.length; i++) {
		total = total + notas[i];
	}
	let promedio = total / notas.length;
	return promedio;
}

console.log(calcularPromedio());

// Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
let numeros = [-1, -2, -3, 0, 1, 2, 3];

function filtrarNumeros() {
	return numeros.filter((numero) => numero > 0);
}
console.log(filtrarNumeros());

// Desafío de programación #13: Busca el número más grande en un array de números
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

console.log(`El número más grande del array es ${encontrarMaximo()}`);

// Alternativa con Math.max
let numeros = [
	2, 5, 6, 4, 32, 45, 2, 34, 3243445, 123213, 524334, 532, 421324, 231231,
];

let numeroMayor = Math.max(...numeros);

console.log(`El número más grande del array es ${numeroMayor}`);
