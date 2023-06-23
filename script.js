const HEXA = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];
const BOTON = document.getElementById('btn');

let colorInicio = '#85929E';

document.body.style.background = colorInicio;

let codigoColor = document.getElementById('codigoColor');

codigoColor.innerText = colorInicio;

BOTON.addEventListener('click', generarHexa);

let posicionArray;
let colorHexa;

function generarHexa() {
  codigoColor.innerText = '#';
  for (let i = 0; i < 6; i++) {
    posicionArray = Math.floor(Math.random() * HEXA.length);
    codigoColor.innerText = codigoColor.innerText.concat(HEXA[posicionArray]);
    colorInicio = codigoColor.innerText;
    document.body.style.background = colorInicio;
    console.log(HEXA[posicionArray]);
  }
}
