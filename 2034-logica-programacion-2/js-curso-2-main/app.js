let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del desafío"

function consoleButton() {
    console.log('El botón fue clicado');
}

function promptButton() {
    let ciudad = prompt("Ingrese una ciudad de Brasil");
    alert(`Estuve en la ciudad ${ciudad} y me acordé de ti`);
}

function alertButton() {
    alert("Yo amo JS");
}

function sumaButton() {
    let numero1 = parseInt(prompt("Ingrese el primer número: "));
    let numero2 = parseInt(prompt("Ingrese el segundo número: "));
    alert(`El resultado de la suma de ${numero1} y ${numero2} es ${numero1 + numero2}`);
}