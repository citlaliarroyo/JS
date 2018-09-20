window.onload = function(){
	var imagen = document.getElementById("imagen");
	var browser = navigator.userAgent;
	//regex - expresiones regulares
	var n = browser.search("Firefox");
	var c = browser.search("Chrome");	
	var s = browser.search("Safari");

	console.log("Expresion: ", n);
	console.log("Expresion: ", c);
	console.log("Expresion: ", s);
	console.log( n > 1);
	console.log( c > 1);
	console.log( s > 1);
	if (n > 1){
		document.getElementById("titulo").innerHTML = "Bienvenido usuario de Firefox";
		imagen.src = "img/Firefox.png";
		imagen.style.width = "100px";
		imagen.style.height = "100px";
	}
	if (c > 1){
		document.getElementById("titulo").innerHTML = "Bienvenido usuario de Chrome";
		imagen.src = "img/Chrome.png";
		imagen.style.width = "100px";
		imagen.style.height = "100px";
	}
	if (s > 1 && c < 1){
		document.getElementById("titulo").innerHTML = "Bienvenido usuario de Safari";
		imagen.src = "img/Safari.png";
		imagen.style.width = "100px";
		imagen.style.height = "100px";
	}
	console.log("imagen: ", imagen);
	console.log("browser: ", browser);
	}
