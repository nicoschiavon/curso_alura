// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function icm(peso, altura) {
    console.log(`El ICM de peso: ${peso} y altura: ${altura} es de ${peso / (Math.pow(altura, 2))}`);
}
icm(94, 1.70)
// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(numero) {
    fact = 1;
    for( var i = 1; i < numero + 1; i++) {
        fact *= i;
    }
    console.log(`El factorial de ${numero} es ${fact}`);
}
factorial(6);
// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function conversor(dolares) {
    console.log(`Reales: ${dolares * 4.80}`);
}
conversor(400);
// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function area(altura, anchura) {
    console.log(`Area: ${altura * anchura}`);
}
function perimetro(altura, anchura) {
    console.log(`Perimietro: ${altura * 2 + anchura * 2}`);
}
area(4, 6);
perimetro(4, 6);
// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaCirculo(radio) {
    console.log(`El area es: ${parseInt(Math.PI * Math.pow(radio, 2))}`);
}
function radioCirculo(radio) {
    console.log(`El perimetro es: ${parseInt(2 * Math.PI * radio)}`);
}
areaCirculo(20);
radioCirculo(20);
// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.