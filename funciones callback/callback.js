//son funciones que llaman a otras funciones
//pueden estar definidar o anonimas
/*
function saludar(nombre){
    alert("Hola "+nombre);
}
//funcion que ejecuta otra funcion(callback)
function llamarSaludo(n,fn){
    fn(n);
}
//ejecutar funciones
var nom = prompt("Digite su nombre");
llamarSaludo(nom,saludar);
*/

/*function operacion(n1, n2, signo){
    if (signo == "-"){
        return alert (n1 - n2);
    }else if(signo == "/"){
        return alert (n1 /n2);
    }else if(signo == "*"){
        return alert(n1 * n2);
    }else{
        return alert (n1 + n2)
    }
}

function llamarfunciones(n1,n2, signo, fn){
    fn(n1,n2,signo);
}
//ejecutar el callback
var num1 = parseInt(prompt("Digite numero 1"));
var num2 = parseInt(prompt("Digite numero 2"));
var sig = prompt("Digite signo");
llamarfunciones(num1, num2, sig, operacion);
*/


//crear una funcion que calcule el iva y total a pagar de 3productos, por medio de una 
//funcion callback ejecutar la funcion
//-ingresar los valores de los productos por el navegador.
//-mostrar en plantilla el valor de los productos, cuanto es el aumento y 
//el total a pagar.

