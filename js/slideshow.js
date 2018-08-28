var posicion = 1;
var bloques = document.getElementsByClassName("bloques_slide");
bloques[0].style.display = "block";



function sig(){
    bloques[posicion-1].style.display = "none";
    if (posicion < bloques.length){
        bloques[posicion].style.display = "block"
        posicion++;
    }
    else{
        bloques[0].style.display ="block";
        posicion = 1;
    }
}

function ant(){
    bloques[posicion-1].style.display = "none";
    if (posicion != 1){
        bloques[posicion-2].style.display = "block"
        posicion--;
    }
    else{
        bloques[bloques.length - 1].style.display ="block";
        posicion = bloques.length;
    }
}
