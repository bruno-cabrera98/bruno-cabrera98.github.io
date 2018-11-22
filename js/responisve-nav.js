document.addEventListener("DOMContentLoaded", function(event){
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
});