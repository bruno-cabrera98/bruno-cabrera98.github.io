document.addEventListener("DOMContentLoaded", function (event) {
    var contenedor = document.getElementById("contenedor");
    var request = new XMLHttpRequest();
    var url = "https://bruno-cabrera98.github.io/js/juegos.json";
    request.open("GET", url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        for (let i = 0; i < 8; i++){  //este for es para rellenar la página
            for (let k = 0; k < 4; k++){
                contenedor.innerHTML += "<li class='bloque'><a href='" + request.response.juegos[k].link + "'><h1>" + request.response.juegos[k].name + "</h1><img src='" + request.response.juegos[k].main_picture + "'alt='foto de" + request.response.juegos[k].name + "'><div class='info'><p class='categoria'>" + request.response.juegos[k].categories[0] + "-" + request.response.juegos[k].categories[1] + "-" +  request.response.juegos[k].categories[2] + "</p><p class='precio'>$" + request.response.juegos[k].price + "</p></div></a></li>"; 
            }
        }
    }
});
