// Crear una función que muestre "¡Hola, mundo!" en la consola.
function mensaje() {
    console.log("¡Hola, mundo!");
}

// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function mensajeNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
mensajeNombre("Nico");

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function numDoble(numero) {
    console.log(`El doble de ${numero} es ${numero * 2}`);
}
numDoble(25);

// Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(numero1, numero2, numero3) {
    console.log(`El promedio de ${numero1}, ${numero2} y ${numero3} es ${(numero1 + numero2 + numero3) / 3}`);
}
promedio(4, 8, 2);
// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function numMayor(num1, num2) {
    console.log(`${num1 > num2 ? `El ${num1} es mayor`: `El ${num2} es mayor`}`);
}
numMayor(4, 5);

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function multNum(numero) {
    console.log(`El resultado de ${numero} * ${numero} es ${numero * numero}`);
}
multNum(4);