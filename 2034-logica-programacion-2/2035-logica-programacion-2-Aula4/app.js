let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos)
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('#info__juego',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('#info__juego','El número secreto es menor');
        } else {
            asignarTextoElemento('#info__juego','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('#info__juego','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}



function condicionesIniciales() {

    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('#p__seleccion', 'Elija la dificultad del juego');
    asignarTextoElemento('#intentos', 'Elija la cantidad de intentos');
    asignarTextoElemento('#intentos__extra', 'O ingrese la cantidad que usted desea');
    // asignarTextoElemento('#info__juego',`Indica un número del 1 al ${numeroMaximo}`);
    // numeroSecreto = generarNumeroSecreto();
    // intentos = 1;
    // console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

// Agregar cantidad de intentos

function agregarIntentos() {
    intentos = document.getElementById('valorIntentos').value;
    if (intentos == "") {
        console.log('si pasa');
        intentos = document.getElementById('intentos__select').value;
    } 
    console.log(intentos);
    intentos = parseInt(intentos);
    document.getElementById('menu__seleccion__juego').setAttribute('hidden','true');
    document.getElementById('menu__juego').removeAttribute('hidden');
    asignarTextoElemento('#p__seleccion',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();

}

condicionesIniciales();