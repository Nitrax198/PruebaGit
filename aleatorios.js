document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(evento) {
    if (document.readyState === "interactive") {
		generaraleatorio();
        document.getElementById("comprobarnumero").addEventListener("click", comprobarNumero, false);
		document.getElementById("guardar").addEventListener("click", grabarresultado, false);
    }
}
function generaraleatorio(){
aleatorio = Math.floor((Math.random()*100000)+1);
document.getElementById("aleatorio").setAttribute("value",aleatorio);
}
function comprobarNumero(){
    var aleatorio=document.getElementById("aleatorio").value;
	var mi_numero=document.getElementById("mi_numero").value;
    if(mi_numero>aleatorio)
    {
        var  fallos = document.getElementById("fallo");
		var texto = mi_numero + " es mayor al numero aleatorio";
		var nodotexto = document.createTextNode(texto);
		fallos.appendChild(nodotexto);
    }
    else if(mi_numero<aleatorio)
    {
        var  fallos =document.getElementById("fallo");
		var texto = mi_numero + " es menor al numero aleatorio";
		var nodotexto = document.createTextNode(texto);
		fallos.appendChild(nodotexto);
		var br = document.createElement("br");
		fallos.appendChild(br);
    }
    else
    {
        document.getElementById("formulario_Oculto").style.display="block";
    }
}
function grabarresultado(){
	var nombre_enviar =document.getElementById("nombre").value;
	var numintentos = document.getElementById("fallo").children.length;
	var numintentos_enviar= (parseInt(numintentos)/2);
	$.ajax({
        url: 'partephp.php',
        type: 'GET',
        data: {nombre: nombre_enviar,intentos:numintentos_enviar},
        timeout: 3000,
        success: resultado,
        error: function () {},
        complete: function () { }
    });
}
function resultado(datos){
	document.getElementById("resultados").style.display= "block";
	var array = JSON.parse(datos);
	var table = document.getElementById("tabla_oculta");
	for (var i in array) {
			var tr = document.createElement('tr');
			for (var j in array[i]) {
				var td = document.createElement('td');
				var texto = document.createTextNode(array[i][j]);
				td.appendChild(texto);
				tr.appendChild(td);
			}
		table.appendChild(tr);
	}
}