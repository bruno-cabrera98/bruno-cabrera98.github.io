document.addEventListener("DOMContentLoaded", function (event) {
    var request = new XMLHttpRequest();
    var url = "https://bruno-cabrera98.github.io/js/juegos.json";
    request.open("GET", url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        let name = document.getElementsByClassName("titulo");
        let l_desc = document.getElementsByClassName("l_desc");
        let main_picture = document.getElementsByClassName("main_picture");
        let other_pictures = document.getElementsByClassName("imagen");
        for(let i = 0; i < name.length; i++){
            name[i].innerHTML = request.response.juegos[0].name;
        }
        for(let i = 0; i < l_desc.length; i++){
            l_desc[i].innerHTML = request.response.juegos[0].l_desc;
        }
        for(let i = 0; i < main_picture.length; i++){
            main_picture[i].innerHTML = "<img src='" + request.response.juegos[0].main_picture + "' alt='Foto portada'>";
        }
        for(let i = 0; i < other_pictures.length; i++){
            other_pictures[i].innerHTML = "<img src='" + request.response.juegos[0].other_pictures[i] + "' alt='Foto del juego'>";
        }
    }
});