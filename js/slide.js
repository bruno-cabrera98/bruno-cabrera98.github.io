document.addEventListener("DOMContentLoaded", function(event){

    var imagenes_arr = document.getElementsByClassName("imagen");
    var bot_ant = document.getElementById("ant");
    var bot_prox = document.getElementById("prox");

    var pos = 0; //Posición de 0 a n-1

    for (var i = 1; i < imagenes_arr.length; i++){
        imagenes_arr[i].style.opacity = "0";
    }

    function ant(){
        imagenes_arr[pos].style.opacity = "0";
        if (pos != 0){
            pos--;
            imagenes_arr[pos].style.opacity = "1";
        }
        else{
            pos = imagenes_arr.length -1;
            imagenes_arr[pos].style.opacity = "1";
        }
    }

    function prox(){
        imagenes_arr[pos].style.opacity = "0";
        if (pos < imagenes_arr.length-1){
            pos++;
            imagenes_arr[pos].style.opacity = "1"
        }
        else{
            pos = 0;
            imagenes_arr[pos].style.opacity ="1";
        }
    }

    bot_ant.addEventListener("click",function(){
        ant();
    });

    bot_prox.addEventListener("click", function(){
        prox();
    });

})