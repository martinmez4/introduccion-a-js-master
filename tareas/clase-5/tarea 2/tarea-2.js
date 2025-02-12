//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

function mostrarInformacion(primerNombre, segundoNombre, apellido, edad) {
	const información = `El nombre completo del usuario es ${primerNombre} ${segundoNombre} ${apellido} y su edad es ${edad} años.`;
	return información;
}

const $saludar = document.querySelector("#saludar");

$saludar.onclick = function (event) {
	event.preventDefault();
	const $primerNombre = document.querySelector("#primer-nombre").value;
	const $segundoNombre = document.querySelector("#segundo-nombre").value;
	const $edad = Number(document.querySelector("#edad").value);
	const $apellido = document.querySelector("#apellido").value;

	document.querySelector("#informacion").textContent = mostrarInformacion(
		$primerNombre,
		$segundoNombre,
		$apellido,
		$edad
	);

	document.querySelector(
		"#bienvenido"
	).textContent = `Bienvenido ${$primerNombre}!`;
};

function resetear() {
	document.querySelector("#informacion").textContent = "";
	document.querySelector("#bienvenido").textContent = "Bienvenido!";
	document.querySelector("#primer-nombre").value = "";
	document.querySelector("#segundo-nombre").value = "";
	document.querySelector("#edad").value = "";
	document.querySelector("#apellido").value = "";
}

const $reset = document.querySelector("#reset");

$reset.onclick = function (event) {
	event.preventDefault();
	resetear();
};
