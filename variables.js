//variables numericas
var iva = 16;
var x = document.getElementById("variable");
x.innerHTML = "Uso de una variable numerica:" + iva + ".";
console. log("variable: ", iva);
//variable de texto
var mensaje = "Bienvenido a nuestro sitio web"
var x = document.getElementById("variable2");
x.innerHTML = "Uso de una variable de texto:" + mensaje + ".";
console. log("variable2: ", mensaje);
//variable boleanas
var clienteRegistrado = false;
var x = document.getElementById("variable3");
x.innerHTML = "Uso de una variable boleana:" + clienteRegistrado + ".";
console. log("variable3:", clienteRegistrado);
//variables de tipo Arreglo (Array) 
var dias = ["Lunes", "Martes","Miercoles","Jueves","Viernes"];
var x = document.getElementById("variable4");
x.innerHTML = "Uso de una variable Array:" + dias + ".";
console. log("variable4: ", dias);
//variable de tipo objeto (object: propiedad y el valor)
var perro = {nombre:"Boston", edad:5, vivo: true};
var x = document.getElementById("variable5");
x.innerHTML = "Uso de una variable objeto:" + perro.nombre + ".";
console. log("variable5:",perro.nombre);