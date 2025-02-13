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
			$label.setAttribute("for", `salario-integrante-${i}`);
			$label.textContent = `Salario integrante ${i}`;

			const $input = document.createElement("input");
			$input.id = `salario-integrante-${i}`;
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
