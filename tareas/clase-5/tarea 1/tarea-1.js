//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>
function calcularSalarioMensual(salarioAnual) {
	return salarioAnual / 12;
}

document.querySelector("#calcular").onclick = function (event) {
	event.preventDefault();
	const salarioAnual = Number(document.querySelector("#salario-anual").value);
	const salarioMensual = calcularSalarioMensual(salarioAnual);

	document.querySelector("#salario-mensual").value = salarioMensual;
};
