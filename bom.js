//The Browser object model (BOM)
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("prueba");
x.innerHTML = "Ancho de la ventana interior del navegador:" + w + ", altura:" + h +".";

//window Screen width la propiedad Screen.width devuelve el ancho de la pantalla del visitante en pixeles
document.getElementById("prueba2").innerHTML = "el ancho de la pantalla es" + screen.width;
//window Screen height la propiedad Screen.width devuelve el alto de la pantalla del visitante en pixeles
document.getElementById("prueba3").innerHTML = "el alto de la pantalla es" + screen.height;
//window Screen available width la propiedad Screen.width devuelve el ancho de la pantalla del visitante en pixeles, 
//menos las caracteristicas de la interfaz como la barra de tareas de windows.
document.getElementById("prueba4").innerHTML = "ancho de pantalla disponible:" + screen.availWidth;
//window Screen available height la propiedad Screen.height devuelve el ancho de la pantalla del visitante en pixeles, 
//menos las caracteristicas de la interfaz como la barra de tareas de windows.
document.getElementById("prueba5").innerHTML = "alto de pantalla disponible:" +  screen.availHeight;
//window Screen color Depth
document.getElementById("prueba6").innerHTML = "profundidad de color de pantalla:" + screen.colorDepth;
//window Screen color Depth
document.getElementById("prueba7").innerHTML = "profundidad del pixel de la pantalla :" + screen.pixelDepth;
//Ventana Ubicación Href La propiedad window.location.href devuelve la URL de la página actual.
document.getElementById("prueba8").innerHTML = "Page location is " + window.location.href;
//Nombre de ruta de ubicación de ventana La propiedad window.location.pathname devuelve la ruta de acceso de la página actual.
document.getElementById("prueba9").innerHTML = "Page path is " + window.location.pathname;
//Nombre de host de ubicación de ventana La propiedad window.location.hostname devuelve el nombre del host de Internet (de la página actual).
document.getElementById("prueba10").innerHTML = "Page hostname is " + window.location.hostname;
//Protocolo de ubicación de ventana La propiedad window.location.protocol devuelve el protocolo web de la página.
document.getElementById("prueba11").innerHTML = "Page protocol is " + window.location.protocol;
//Puerto de ubicación de ventana La propiedad window.location.port devuelve el número del puerto de host de Internet (de la página actual).
document.getElementById("prueba12").innerHTML = "Port number is " + window.location.port;
