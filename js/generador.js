document.addEventListener("DOMContentLoaded", function (event) {
    var request = new XMLHttpRequest();
    var url = "https://bruno-cabrera98.github.io/js/juegos.json";
    request.open("GET", url);
    request.responseType = 'json';
    request.send();
    request.onload = function () { //Carga la página usando el json
        let name = document.getElementsByClassName("titulo");
        let l_desc = document.getElementsByClassName("l_desc");
        let main_picture = document.getElementsByClassName("main_picture");
        let other_pictures = document.getElementsByClassName("imagen");
        let score_stars = document.getElementsByClassName("estrella");
        let score = document.getElementById("puntos");
        let categories = document.getElementsByClassName("categories");
        let price = document.getElementsByClassName("price");
        let requirements_type = [document.getElementById("caja-specs-minimos"), document.getElementById("caja-specs-recomendados")];

        for (let i = 0; i < name.length; i++) {
            name[i].innerHTML = request.response.juegos[0].name;
        };
        for (let i = 0; i < l_desc.length; i++) {
            l_desc[i].innerHTML = request.response.juegos[0].l_desc;
        };
        for (let i = 0; i < main_picture.length; i++) {
            main_picture[i].innerHTML = "<img src='" + request.response.juegos[0].main_picture + "' alt='Foto portada'>";
        };
        for (let i = 0; i < other_pictures.length; i++) {
            other_pictures[i].innerHTML = "<img src='" + request.response.juegos[0].other_pictures[i] + "' alt='Foto del juego'>";
        };
        for (let i = 0; i < score_stars.length; i++) {
            if (i < request.response.juegos[0].score) {
                score_stars[i].innerHTML = "<img src='img/estrella-amarilla.svg' alt='estrella-dorada'></img>"
            }
            else {
                score_stars[i].innerHTML = "<img src='img/estrella-gris.svg' alt='estrella-gris'></img>"
            }
        };
        score.innerHTML = request.response.juegos[0].score;
        for(let i = 0; i < categories.length; i++){
            categories[i].innerHTML = request.response.juegos[0].categories[i];
        }
        for(let i = 0; i < price.length; i++){
            price[i].innerHTML = request.response.juegos[0].price;
        }

        /*requerimientos*/
        let requirements = [request.response.juegos[0].requirements.minimum, request.response.juegos[0].requirements.recomended];
        for (let i = 0; i < 2; i++) {
            requirements_type[i].getElementsByClassName("os")[0].innerHTML = requirements[i].os;
            requirements_type[i].getElementsByClassName("cpu")[0].innerHTML = requirements[i].cpu;
            requirements_type[i].getElementsByClassName("ram")[0].innerHTML = requirements[i].ram;
            requirements_type[i].getElementsByClassName("internet")[0].innerHTML = requirements[i].internet;
            requirements_type[i].getElementsByClassName("gpu")[0].innerHTML = requirements[i].gpu;
            requirements_type[i].getElementsByClassName("space")[0].innerHTML = requirements[i].space;
        }





    }
});