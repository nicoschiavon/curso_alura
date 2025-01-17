// let numeroSecreto = 6;
// let numeroUsuario = prompt("Me indicas un numero por favor:");

// console.log(numeroUsuario);

// if (numeroUsuario == numeroSecreto) {
//     alert('Acertaste el numero');
// }

// let mensajeDeBienvenida = 'Bienvenido a la aplicación';
// alert('mensajeDeBienvenida');

// alert('Bienvenidos al juego del número secreto');
// let eleccion = prompt('Elige un número entre 1 y 10');

// let numeroSecreto = 4;
// if (eleccion == numeroSecreto) {
// alert('Adivinaste');
// } 

// let contraseniaDelSistema = "contraseniaPrueba!";
// let contrasenia = prompt("Ingrese la contraseña del sistema:");

// if (contrasenia == contraseniaDelSistema){
//     alert("Acceso al sistema garantizado");
// }

let nombre = 'Lua';
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = '¡Error! Completa todos los campos';

alert('¡Bienvenida y bienvenido a nuestro sitio web!');
alert('¡Error! Completa todos los campos');
alert(mensajeDeError);
nombre = prompt('Ingrese su nombre:');
edad = prompt('Ingrese su edad:');

if (edad >= 18) {
    alert('¡Puedes obetener tu licencia de conducir!');
}