/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
function crearIntegrante() {
	const $cantidadIntegrantes = Number(
		document.querySelector("#numero-de-integrantes").value
	);
	const $contenedorIntegrantes = document.querySelector(
		"#contenedor-integrantes"
	);
	$contenedorIntegrantes.innerHTML = "";
	const $botonCalcular = document.querySelector("#calcular");
	$botonCalcular.style.display = "none";

	if ($cantidadIntegrantes >= 2) {
		$botonCalcular.style.display = "block";
	}

	for (let i = 1; i <= $cantidadIntegrantes; i++) {
		const $label = document.createElement("label");
		$label.setAttribute("for", `edad-integrante-${i}`);
		$label.textContent = `Edad integrante ${i}`;

		const $input = document.createElement("input");
		$input.id = `edad-integrante-${i}`;
		$input.type = "number";

		const $br = document.createElement("br");

		$contenedorIntegrantes.appendChild($label);
		$contenedorIntegrantes.appendChild($input);
		$contenedorIntegrantes.appendChild($br);
	}
}

const $botonCrearIntegrantes = document.querySelector("#crear-integrantes");

$botonCrearIntegrantes.onclick = function (event) {
	event.preventDefault();
	crearIntegrante();
};

function obtenerMayorEdad() {
	const $edadesIntegrantes = document.querySelectorAll(
		"[id^=edad-integrante-]"
	);

	const arrayEdades = Array.from($edadesIntegrantes)
		.map(($edad) => Number($edad.value))
		.filter((edad) => edad !== 0);

	if (arrayEdades.length === 0) {
		return alert("No hay edades validas.");
	}

	const mayorEdad = Math.max(...arrayEdades);
	return mayorEdad;
}

function obtenerMenorEdad() {
	const $edadesIntegrantes = document.querySelectorAll(
		"[id^=edad-integrante-]"
	);

	const arrayEdades = Array.from($edadesIntegrantes)
		.map(($edad) => Number($edad.value))
		.filter((edad) => edad !== 0);

	if (arrayEdades.length === 0) {
		return alert("No hay edades validas.");
	}

	const menorEdad = Math.min(...arrayEdades);
	return menorEdad;
}

function obtenerEdadPromedio() {
	const $edadesIntegrantes = document.querySelectorAll(
		"[id^=edad-integrante-]"
	);

	const arrayEdades = Array.from($edadesIntegrantes).map(($edad) =>
		Number($edad.value)
	);

	let total = 0;
	for (let i = 0; i < arrayEdades.length; i++) {
		total += arrayEdades[i];
	}

	const promedio = total / arrayEdades.length;
	return promedio;
}
