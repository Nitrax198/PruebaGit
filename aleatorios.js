document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(evento) {
    if (document.readyState === "interactive") {
		generaraleatorio();
        document.getElementById("boton").addEventListener("click", comprobarNumero, false);
    }
}

function generaraleatorio(){
aleatorio = Math.floor((Math.random()*100000)+1);
document.getElementById("aleatorio").setAttribute("value",aleatorio);
}
function comprobarNumero(){
    mi_numero=document.getElementById("aleatorio").value;
	mi_numero=document.getElementById("mi_numero").value;
    if(mi_numero>aleatorio)
    {
        alert("El número que has introducido es mayor que el que quieres adivinar");
    }
    else if(mi_numero<aleatorio)
    {
        alert("El número que has introducido es menor que el que quieres adivinar");
    }
    else
    {
        alert("Has acertado");
    }

}