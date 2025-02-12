//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
const $numeros = document.querySelectorAll("li");

const arrayNumeros = [...$numeros].map(($numeros) =>
	Number($numeros.textContent)
);

function calcularPromedio() {
	let total = 0;
	for (let i = 0; i < arrayNumeros.length; i++) {
		total += arrayNumeros[i];
	}
	const promedio = total / arrayNumeros.length;
	return promedio;
}

function obtenerNumeroMayor() {
	const numeroMayor = Math.max(...arrayNumeros);
	return numeroMayor;
}

function obtenerNumeroMenor() {
	const numeroMenor = Math.min(...arrayNumeros);
	return numeroMenor;
}

function obtenerNumeroMasSeRepite() {
	let numeroMasRepetido = arrayNumeros[0];
	let maxFrecuencia = 1;

	for (let i = 0; i < arrayNumeros.length; i++) {
		let frecuenciaActual = 0;

		for (let x = 0; x < arrayNumeros.length; x++) {
			if (arrayNumeros[i] === arrayNumeros[x]) {
				frecuenciaActual++;
			}
		}

		if (frecuenciaActual > maxFrecuencia) {
			maxFrecuencia = frecuenciaActual;
			numeroMasRepetido = arrayNumeros[i];
		}
	}

	return numeroMasRepetido;
}

const $calcular = document.querySelector("#calcular");

function mostrarResultados() {
	document.querySelector(
		"#promedio"
	).textContent = `El promedio es: ${calcularPromedio()}`;
	document.querySelector(
		"#numero-menor"
	).textContent = `El número menor es: ${obtenerNumeroMenor()}`;
	document.querySelector(
		"#numero-mayor"
	).textContent = `El número mayor es: ${obtenerNumeroMayor()}`;
	document.querySelector(
		"#mas-se-repite"
	).textContent = `El número que más se repite es: ${obtenerNumeroMasSeRepite()}`;
}

$calcular.onclick = function (event) {
	event.preventDefault();
	mostrarResultados();
};
