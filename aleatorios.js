/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var aleatorio = Math.floor((Math.random()*100)+1);
alert("Número a adivinar: "+aleatorio);
do
{
    var mi_numero=parseInt(prompt("Introduce un numero",""));
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
}while(mi_numero!==aleatorio);



