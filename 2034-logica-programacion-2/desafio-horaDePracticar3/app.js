// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguagesDeProgramacion);
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarElementos() {
    for (i = 0; i < lenguagesDeProgramacion.length ; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }    
}
mostrarElementos();
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarElementosAlReves() {
    for (i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarElementosAlReves();
// Crea una función que calcule el promedio de los elementos en una lista de números.
let numeros = [2, 5, 6, 7, 4, 9];
let prom = 0;
function promedio(numeros) {
    for (i = 0; i < numeros.length; i++) {
        prom += numeros[i];
    }
    return prom / numeros.length;
}
promedio(numeros);
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mayorMenor(numeros) {
    let mayor = numeros[0];
    let menor = numeros[0];
    for (i = 0; i < numeros.length; i++) {
        if (menor > numeros[i]){
            menor = numeros[i];
        }
        if (mayor < numeros[i]) {
            mayor = numeros[i];
        }
    }
console.log(`De la lista ${numeros} el mayor es ${mayor} y el menor es ${menor}`);
}
mayorMenor(numeros);
// Crea una función que devuelva la suma de todos los elementos en una lista.
function suma(numeros) {
    let sum = 0;
    for (i = 0; i < numeros.length; i++) {
        sum += numeros[i];
    }
    console.log(`La suma en total de la lista ${numeros} es ${sum}`);
}
suma(numeros);
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function findElemnt(numeros, num) {
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] == num) {
            return i;
        }
    }
    return -1;
}
console.log(findElemnt(numeros, 5));
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    let lista3 = [];
    for (i = 0; i < lista1.length; i++) {
        lista3 =  lista1[i] + lista2[2];
    }
    return lista3;
}
lista1 = [2, 4, 1, 8];
lista2 = [3, 5, 9, 4];
console.log(sumarListas(lista1, lista2));
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.