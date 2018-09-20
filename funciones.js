

//DECLARAMOS LA FUNCIÓN
function saludo(){
	//Tarea de la función
	console. log("HOLA");

}
//ejecucion 
saludo();

//declaracion la funcion
function operacion(digito1, digito2){
	var resultado = digito1 + digito2;
	console.log("resultado:", resultado);
}
operacion(4, 8);
operacion(25, 9);

function retorno1(){
	var numero =5;
	return numero;
}
console.log(retorno1());

//funciones con retorno con parametros
function retorno2(numero){
	return numero;

}
console.log(retorno2(78));