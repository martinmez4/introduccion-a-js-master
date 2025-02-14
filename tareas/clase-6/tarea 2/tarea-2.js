/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function crearIntegrante() {
	const $numeroIntegrantes = Number(
		document.querySelector("#numero-integrantes").value
	);

	const $contenedorSalarios = document.querySelector("#contenedor-salarios");

	$contenedorSalarios.innerHTML = "";

	const $botonCalcular = document.querySelector("#calcular");
	$botonCalcular.style.display = "none";

	if ($numeroIntegrantes >= 2) {
		$botonCalcular.style.display = "block";
	}

	if ($numeroIntegrantes >= 2) {
		for (let i = 1; i <= $numeroIntegrantes; i++) {
			const $label = document.createElement("label");
			$label.setAttribute("for", `salario-anual-integrante-${i}`);
			$label.textContent = `Salario anual integrante ${i}`;

			const $input = document.createElement("input");
			$input.id = `salario-anual-integrante-${i}`;
			$input.type = "number";

			const $br = document.createElement("br");

			$contenedorSalarios.appendChild($label);
			$contenedorSalarios.appendChild($input);
			$contenedorSalarios.appendChild($br);
		}
	} else {
		$contenedorSalarios.textContent =
			"El numero de integrantes debe ser mayor a 1.";
	}
}

const $botonCrearIntegrantes = document.querySelector("#crear");

$botonCrearIntegrantes.onclick = function (event) {
	event.preventDefault();
	crearIntegrante();
};

function obtenerMayorSalario() {
	const $salariosIntegrantes = document.querySelectorAll(
		"[id^=salario-integrante-]"
	);

	const arraySalarios = Array.from($salariosIntegrantes)
		.map(($salario) => Number($salario.value))
		.filter((salario) => salario !== 0);

	if (arraySalarios.length === 0) {
		return alert("No hay salarios validos.");
	}

	const mayorSalario = Math.max(...arraySalarios);
	return mayorSalario;
}

function obtenerMenorSalario() {
	const $salariosIntegrantes = document.querySelectorAll(
		"[id^=salario-integrante-]"
	);

	const arraySalarios = Array.from($salariosIntegrantes)
		.map(($salario) => Number($salario.value))
		.filter((salario) => salario !== 0);

	if (arraySalarios.length === 0) {
		return alert("No hay salarios validos.");
	}

	const menorSalario = Math.min(...arraySalarios);
	return menorSalario;
}

function obtenerSalarioAnualPromedio() {
	const $salariosIntegrantes = document.querySelectorAll(
		"[id^=salario-integrante-]"
	);

	const arraySalarios = Array.from($salariosIntegrantes)
		.map(($salario) => Number($salario.value))
		.filter((salario) => salario !== 0);

	if (arraySalarios.length === 0) {
		return alert("No hay salarios validos.");
	}

	let total = 0;
	for (let i = 0; i < arraySalarios.length; i++) {
		total += arraySalarios[i];
	}

	const salarioAnualPromedio = total / arraySalarios.length;
	return salarioAnualPromedio;
}

function obtenerSalarioMensualPromedio() {
	const $salariosIntegrantes = document.querySelectorAll(
		"[id^=salario-integrante-]"
	);

	const arraySalarios = Array.from($salariosIntegrantes)
		.map(($salario) => Number($salario.value))
		.filter((salario) => salario !== 0);

	if (arraySalarios.length === 0) {
		return alert("No hay salarios validos.");
	}

	let total = 0;
	for (let i = 0; i < arraySalarios.length; i++) {
		total += arraySalarios[i];
	}

	const salarioAnualPromedio = total / arraySalarios.length;
	const salarioMensualPromedio = salarioAnualPromedio / 12;
	return salarioMensualPromedio;
}

const $botonCalcular = document.querySelector("#calcular");

$botonCalcular.onclick = function (event) {
	event.preventDefault();
};
