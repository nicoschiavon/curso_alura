let nombre = "Leandro Nicolás Schiavón";

// 1
console.log("Bienvenido a los Ejercicios del Aula4");
// 2
console.log(`Hola, ${nombre}!`);
// 3
alert(`Hola, ${nombre}!`);
// 4 
let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`El leguaje preferido es: ${lenguaje}`);
// 5
let valor1 = 4;
let valor2 = 8;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es: ${resultado}`);
// 6 
let resultadoResta = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultadoResta}`);
// 7
let edad = parseInt(prompt("Ingrese su edad:"));
console.log(`${edad >= 18 ? "Es mayor" : "Es menor"}`);
// 8
let numero = parseInt(prompt("Ingrese un número:"));
if (numero == 0) {
    console.log("El numero es cero");
} else {
    console.log(`${numero < 0 ? "Es negativo" : "Es positivo"}`);
}
// 9
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}
// 10
let nota = 8;
console.log(`${nota >= 7 ? "Aprobado" : "Reprobado"}`);
// 11
console.log(Math.random());
// 12
console.log((Math.floor(Math.random()*10)+1));
// 13
console.log((Math.floor(Math.random()*1000)+1));