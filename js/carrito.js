function cambiar_numero(cantidad, valor_actual) {
	return (valor_actual + cantidad);
}

document.addEventListener("DOMContentLoaded", function (event) {
	var cubrepantallas = document.getElementById("carro-cubrepantallas");
	var comprar = document.getElementById("boton-comprar");
	var cerrar = document.getElementById("cerrar-carro");
	var cantidad = document.getElementById("cantidad-input");
	var mas = document.getElementById("cantidad-mas");
	var menos = document.getElementById("cantidad-menos");
	var precio_sin_impuestos = document.getElementById("precio-sin-impuestos");
	var precio_con_impuestos = document.getElementById("precio-con-impuestos");
	var cambiantes = document.getElementsByClassName("cambiante");
	comprar.addEventListener("click", function () {
		cubrepantallas.style.display = "block";
		cubrepantallas.style.animationName = "arriba";
		cubrepantallas.style.animationDuration = "0.5s";
		document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
	});
	cerrar.addEventListener("click", function () {
		cubrepantallas.style.animationName = "abajo";
		cubrepantallas.style.animationDuration = "0.5s";
		cubrepantallas.addEventListener("animationend", function () {
			if (cubrepantallas.style.animationName === "abajo") {
				cubrepantallas.style.display = "none";
			}
		});
		document.getElementsByTagName("BODY")[0].style.overflow = "visible";
	});
	mas.addEventListener("click", function () {
		if (cantidad.value < 30) {
			cantidad.value = cambiar_numero(parseInt(cantidad.value), 1);
			precio_sin_impuestos.innerHTML = cantidad.value * 12;
			let num = (cantidad.value * 12 * 1.22);
			num = num.toFixed(2);
			precio_con_impuestos.innerHTML = num;
		}
	});
	menos.addEventListener("click", function () {
		if (cantidad.value > 0) {
			cantidad.value = cambiar_numero(parseInt(cantidad.value), -1);
			precio_sin_impuestos.innerHTML = cantidad.value * 12;
			let num = (cantidad.value * 12 * 1.22);
			num = num.toFixed(2);
			precio_con_impuestos.innerHTML = num;
		}
	});
	document.getElementById("tipo-de-juego-i").addEventListener("change", function(event){
		if (event.target.value == "fisico"){
			for (let i = 0; i < cambiantes.length; i++){
				cambiantes[i].classList.remove("no-input");
				cambiantes[i].children[1].disabled = false;
			}
		}
		else{
			for (let i = 0; i < cambiantes.length; i++){
				cambiantes[i].classList.remove("si-input");
				cambiantes[i].classList.add("no-input");
				cambiantes[i].children[1].disabled = true;
			}
		}
			/*
		cambiantes.forEach(function(input) {
			input
		});*/
	});

})

