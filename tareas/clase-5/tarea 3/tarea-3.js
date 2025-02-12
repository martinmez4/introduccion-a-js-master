//TAREA:
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function crearClases() {
	const numeroDeClases = Number(document.querySelector("#clases").value);
	const $contenedor = document.querySelector("#contenedor-clases");
	$contenedor.innerHTML = "";

	const $calcular = document.querySelector("#calcular");
	$calcular.style.display = "none";

	const $reset = document.querySelector("#reset");
	$reset.style.display = "none";

	for (let i = 1; i <= numeroDeClases; i++) {
		const $labelHoras = document.createElement("label");
		$labelHoras.setAttribute("for", `horas-clase-${i}`);
		$labelHoras.textContent = `Horas clase ${i}: `;

		const $inputHoras = document.createElement("input");
		$inputHoras.id = `horas-clase-${i}`;
		$inputHoras.type = "number";
			$inputHoras.min = 0;

		const $labelMinutos = document.createElement("label");
		$labelMinutos.setAttribute("for", `minutos-clase-${i}`);
		$labelMinutos.textContent = `Minutos clase ${i}: `;

		const $inputMinutos = document.createElement("input");
		$inputMinutos.id = `minutos-clase-${i}`;
		$inputMinutos.type = "number";
			$inputMinutos.min = 0;
			$inputMinutos.max = 59;

		const $labelSegundos = document.createElement("label");
		$labelSegundos.setAttribute("for", `segundos-clase-${i}`);
		$labelSegundos.textContent = `Segundos clase ${i}: `;

		const $inputSegundos = document.createElement("input");
		$inputSegundos.id = `segundos-clase-${i}`;
		$inputSegundos.type = "number";
			$inputSegundos.min = 0;
			$inputSegundos.max = 59;

		const br = document.createElement("br");

		$contenedor.appendChild($labelHoras);
		$contenedor.appendChild($inputHoras);

		$contenedor.appendChild($labelMinutos);
		$contenedor.appendChild($inputMinutos);

		$contenedor.appendChild($labelSegundos);
		$contenedor.appendChild($inputSegundos);
		$contenedor.appendChild(br);
	}

	if (numeroDeClases > 1) {
		$calcular.style.display = "block";
		$reset.style.display = "block";
	}
}


function calcularTiempoTotal() {
	const numeroDeClases = Number(document.querySelector("#clases").value);
	let totalSegundos = 0;

	for (let i = 1; i <= numeroDeClases; i++) {
		const horas =
			parseInt(document.querySelector(`#horas-clase-${i}`).value) || 0;
		const minutos =
			parseInt(document.querySelector(`#minutos-clase-${i}`).value) || 0;
		const segundos =
			parseInt(document.querySelector(`#segundos-clase-${i}`).value) || 0;

		totalSegundos += horas * 3600 + minutos * 60 + segundos;
	}


	const horas = Math.floor(totalSegundos / 3600);
	const minutos = Math.floor((totalSegundos % 3600) / 60);
	const segundos = totalSegundos % 60;

	document.querySelector(
		"#tiempo-total"
	).textContent = `${horas}:${minutos}:${segundos}`;
}

function resetear() {
	const $contenedor = document.querySelector("#contenedor-clases");
	$contenedor.innerHTML = "";
	document.querySelector("#clases").value = "";
	document.querySelector("#tiempo-total").textContent = "";

	const $calcular = document.querySelector("#calcular");
	$calcular.style.display = "none";

	const $botonReset = document.querySelector("#reset");
	$botonReset.style.display = "none";
}

const $crearClases = document.querySelector("#crear-clases");

$crearClases.onclick = function (event) {
	event.preventDefault();
	crearClases();
};

const $calcular = document.querySelector("#calcular");

$calcular.onclick = function (event) {
	event.preventDefault();
	calcularTiempoTotal();
};

const $reset = document.querySelector("#reset");

$reset.onclick = function (event) {
	event.preventDefault();
	resetear();
};
