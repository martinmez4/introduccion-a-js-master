// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreUsuario = (prompt("¿Cómo te llamas?") || "").trim().toLowerCase();

const miNombre = "martín";
const nombreHermano = "nicolas";

if (nombreUsuario === "") {
	console.log("Por favor ingresá un nombre!");
} else if (nombreUsuario === miNombre) {
	console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}.`);
} else if (nombreUsuario === nombreHermano) {
	console.log(`Hola ${nombreUsuario}, te llamás igual que mi hermano.`);
} else {
	console.log(`Hola ${nombreUsuario}!`);
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario = (prompt("¿Cuántos años tenés?") || "").trim();
const edadNumerica = Number(edadUsuario);
const miEdad = 26;

if (isNaN(edadNumerica) || edadUsuario === "") {
	console.log("Ingresa una edad válida");
} else if (edadNumerica === miEdad) {
	console.log("Tenemos la misma edad!");
} else if (edadNumerica > miEdad) {
	console.log("Sos mayor que yo!");
} else {
	console.log("Sos menor que yo!");
}

//tareaDos();
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const usuarioTieneDni = (prompt("¿Tenés documento?") || "")
	.trim()
	.toLowerCase();

const RESPUESTA_SI = "si";
const RESPUESTA_NO = "no";

if (usuarioTieneDni != RESPUESTA_SI && usuarioTieneDni != RESPUESTA_NO) {
	console.log("No entendí tu respuesta, limitate a si o no.");
} else if (usuarioTieneDni === RESPUESTA_SI) {
	const edadUsuario = (prompt("Ingresá tu edad") || "").trim();
	const edadNumerica = Number(edadUsuario);

	if (edadUsuario === "") {
		console.log("No entendi tu respuesta.");
	} else if (isNaN(edadNumerica)) {
		console.log("Ingresá una respuesta valida.");
	} else if (edadNumerica >= 18) {
		console.log("Bienvenido al bar!");
	} else if (edadNumerica < 18) {
		console.log("No podes ingresar al bar.");
	}
} else if (usuarioTieneDni === RESPUESTA_NO) {
	console.log("Necesitas tu dni para ingresar al bar.");
}
