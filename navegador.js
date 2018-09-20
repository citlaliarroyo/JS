//Cookies del navegador La propiedad cookieEnabled devuelve verdadero si las cookies están habilitadas; de lo contrario, es falso:
<div id="prueba"></div>

<script>
document.getElementById("prueba").innerHTML = "cookiesEnabled is " + navigator.cookieEnabled;
</script>
//Nombre de la aplicación del navegador La propiedad appName devuelve el nombre de la aplicación del navegador:
<div id="prueba1"></div>

<script>
document.getElementById("prueba1").innerHTML = "navigator.appName is " + navigator.appName;
</script>
//Nombre del código de la aplicación del navegador La propiedad appCodeName devuelve el nombre del código de la aplicación del navegador:
<div id="prueba2"></div>

<script>
document.getElementById("prueba2").innerHTML = "navigator.appCodeName is " + navigator.appCodeName;
</script>
//El motor del navegador El producto propiedad devuelve el nombre del producto del motor del navegador:
<div id="prueba3"></div>

<script>
document.getElementById("prueba3").innerHTML = "navigator.product is " + navigator.product;
</script>
//La versión del navegador La propiedad appVersion devuelve información de versión sobre el navegador
<div id="prueba4"></div>

<script>
document.getElementById("prueba4").innerHTML = navigator.appVersion;
</script>
//El agente del navegador La propiedad userAgent devuelve el encabezado de agente de usuario enviado por el navegador al servidor:
<div id="prueba5"></div>

<script>
document.getElementById("prueba5").innerHTML = navigator.userAgent;
</script>
//La plataforma del navegador La propiedad de la plataforma devuelve la plataforma del navegador (sistema operativo):
<p id="prueba6"></p>

<script>
document.getElementById("prueba6").innerHTML = navigator.platform;
</script>
//El lenguaje del navegador La propiedad de idioma devuelve el idioma del navegador:
<p id="prueba7"></p>

<script>
document.getElementById("prueba7").innerHTML = navigator.language;
</script>
//Es el navegador en línea? La propiedad onLine devuelve verdadero si el navegador está en línea:
<p id="prueba8"></p>

<script>
document.getElementById("prueba8").innerHTML = navigator.onLine;
</script>
//Está Java habilitado? El método javaEnabled () devuelve verdadero si Java está habilitado:
<p id="prueba9"></p>

<script>
document.getElementById("prueba9").innerHTML = navigator.javaEnabled();
</script>