document.addEventListener("DOMContentLoaded", function(event){

    var slider1 = document.getElementById("juegos-destacados");
    var slider2 = document.getElementById("juegos-nuevos");
    var bot_ant1 = slider1.getElementsByClassName("ant")[0];
    var bot_ant2 = slider2.getElementsByClassName("ant")[0];
    var bot_sig1 = slider1.getElementsByClassName("sig")[0];
    var bot_sig2 = slider2.getElementsByClassName("sig")[0];
    var bloques_slider1 = slider1.getElementsByClassName("slider-juego");
    var bloques_slider2 = slider2.getElementsByClassName("slider-juego");

    var pos_slider1 = 0;
    var pos_slider2 = 0;

    for (let i = 1; i < bloques_slider1.length; i++){
        bloques_slider1[i].style.opacity = "0";
        bloques_slider1[i].style.visibility = "hidden";
    }
    for (let i = 1; i < bloques_slider2.length; i++){
        bloques_slider2[i].style.opacity = "0";
        bloques_slider2[i].style.visibility = "hidden";
    }    

    function ant(bloques,pos){
        let a = pos;
        bloques[a].style.opacity = "0";
        if (pos != 0){
            pos--;
            bloques[pos].style.visibility = "visible";
            bloques[pos].style.opacity = "1";
        }
        else{
            pos = bloques.length -1;
            bloques[pos].style.visibility = "visible";
            bloques[pos].style.opacity = "1";
        }
        setTimeout('', 500);
        bloques[a].style.visibility = "hidden";
        return pos;
    }

    function prox(bloques,pos){
        let a = pos;
        bloques[a].style.opacity = "0";
        if (pos < bloques.length-1){
            pos++;
            bloques[pos].style.visibility = "visible";
            bloques[pos].style.opacity = "1"
        }
        else{
            pos = 0;
            bloques[pos].style.visibility = "visible";
            bloques[pos].style.opacity ="1";
        }
        setTimeout('', 500);
        bloques[a].style.visibility = "hidden";
        return pos;
    }

    bot_ant1.addEventListener("click",function(){
        pos_slider1 = ant(bloques_slider1,pos_slider1);
    });
    bot_ant2.addEventListener("click",function(){
        pos_slider2 = ant(bloques_slider2,pos_slider2);
    });

    bot_sig1.addEventListener("click",function(){
        pos_slider1 = prox(bloques_slider1,pos_slider1);
    });
    bot_sig2.addEventListener("click",function(){
        pos_slider2 = prox(bloques_slider2,pos_slider2);
    });



    /* Responsive nav */
    let nav = document.getElementById("menu");
    let button = document.getElementById("desplegador");
    let abierto = false;
    button.addEventListener("click",function(){
        if (abierto){
            nav.classList.add("cerrado");
            abierto = false;
        }
        else{
            nav.classList.remove("cerrado");
            abierto = true;
        }
        
    });

})

