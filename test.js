console. log("HOLA MUNDO")

//variables numericas
var numero = 5;
var x = document.getElementById("variable");
x.innerHTML = "Uso de una variable numerica:" + numero + ".";
console. log("numero: ", numero);
//variable de texto
var palabra = "HALA MADRID Y NADA MAS"
var x = document.getElementById("variable2");
x.innerHTML = "Uso de una variable de texto:" + palabra + ".";
console. log("palabra: ", palabra);
//variable boleanas
var boleana = true;
var x = document.getElementById("variable3");
x.innerHTML = "Uso de una variable boleana:" + boleana + ".";
console. log("boleana:", boleana);
//variables de tipo Arreglo (Array) 
var colores = ["rojo", "amarillo","azul"];
var x = document.getElementById("variable4");
x.innerHTML = "Uso de una variable Array:" + colores + ".";
console. log("colores: ", colores);
//variable de tipo objeto (object: propiedad y el valor)
var jugo = {"ingrediente1":"fresa", 
			"ingrediente2":"mandarina", 
			"ingrediente3":"platano"};
var x = document.getElementById("variable5");
x.innerHTML = "Uso de una variable objeto:" +  + ".";
console. log("jugo:", jugo);

//variable DOM ("modelo de objetos del documentos")el dom es la estructura de objetos que genera el navegador 
//cuando se carga un documento y se puede alterar mediante javascript para cambiar dinamicamente los contenidos
//y aspectos de la pagina

var caja = document.querySelector("#caja");
console.log("caja:", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "pink";

var cajita = document.querySelector("#cajita")
console.log("cajita:", cajita);

cajita.style.width = "100px";
cajita.style.height = "100px";
cajita.style.background = "purple";



