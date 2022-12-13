const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalcular');
const img = document.querySelector('.imggatito');
const p = document.querySelector('#resultado');
const form = document.querySelector('#form');

form.addEventListener('submit', sumaValue);

function sumaValue(event){
    //console.log({event});
    event.preventDefault();
    const resultadoSuma = +input1.value + +input2.value;
    p.innerText= "Resultado: " + resultadoSuma;
}




