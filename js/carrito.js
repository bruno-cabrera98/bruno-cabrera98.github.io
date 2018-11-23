


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
	var cambiantes = document.getElementsByClassName("cambiante");
	var precio_sin_impuestos = document.getElementById("precio-sin-impuestos");
	var costo_de_envio = document.getElementById("costo-de-envio");
	var precio_total = document.getElementById("precio-total");
	var tipo_de_juego = document.getElementById("tipo-de-juego-i");
	var tipo_de_envio = document.getElementById("tipo-de-envio-s");
	comprar.addEventListener("click", function () {
		actualizar_valores();
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
			cantidad.value = cambiar_numero(parseInt(cantidad.value), +1);
		}
		actualizar_valores();
	});
	menos.addEventListener("click", function () {
		if (cantidad.value > 0) {
			cantidad.value = cambiar_numero(parseInt(cantidad.value), -1);
		}
		actualizar_valores();
	});


	tipo_de_juego.addEventListener("change", function (event) {
		if (event.target.value == "fisico") {
			for (let i = 0; i < cambiantes.length; i++) {
				cambiantes[i].classList.remove("no-input");
				if (cambiantes[i].firstChild) {
					cambiantes[i].children[1].disabled = false;
				}
			}
		}
		else {
			for (let i = 0; i < cambiantes.length; i++) {
				cambiantes[i].classList.remove("si-input");
				cambiantes[i].classList.add("no-input");
				if (cambiantes[i].firstChild) {
					cambiantes[i].children[1].disabled = true;
				}

			}
		}

	});

	
	



});

function actualizar_valores() {
	var cantidad = document.getElementById("cantidad-input");
	var precio_sin_impuestos = document.getElementById("precio-sin-impuestos");
	var costo_de_envio = document.getElementById("costo-de-envio");
	var precio_total = document.getElementById("precio-total");
	var tipo_de_juego = document.getElementById("tipo-de-juego-i");
	var tipo_de_envio = document.getElementById("tipo-de-envio-s");
	let num = (cantidad.value * precio);
	num = num.toFixed(2);
	precio_sin_impuestos.innerHTML = num;
	if (tipo_de_juego.value == "fisico") {
		switch (tipo_de_envio.value) {
			case "comun":
				num = cantidad.value * precio * 0.005;
				num = num.toFixed(2);
				costo_de_envio.innerHTML = num;
				num= cantidad.value * precio * 1.225;
				num = num.toFixed(2);
				precio_total.innerHTML = num; 
				break;
			case "especial":
				num = cantidad.value * precio * 0.02;
				num = num.toFixed(2);
				costo_de_envio.innerHTML = num;
				num = cantidad.value * precio * 1.24;
				num = num.toFixed(2);
				precio_total.innerHTML = num; 
				break;
			case "premium":
				num = cantidad.value * precio * 0.05;
				num = num.toFixed(2);
				costo_de_envio.innerHTML = num;
				num = cantidad.value * precio * 1.27;
				num = num.toFixed(2);
				precio_total.innerHTML = num; 
				break;
		}
	}
	else {
		num = cantidad.value * precio * 1.22;
		num = num.toFixed(2);
		precio_total.innerHTML = num;
	}
}


