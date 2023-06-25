let colorInicio = '#85929E';
document.body.style.background = colorInicio;
let codigoColor = document.getElementById('codigoColor');
codigoColor.innerText = colorInicio;
const BOTON = document.getElementById('btn');

function generarColorHexa() {
  const HEXA = '0123456789ABCDEF';
  let posicionArray;
  codigoColor.innerText = '#';
  for (let i = 0; i < 6; i++) {
    posicionArray = Math.floor(Math.random() * HEXA.length);
    codigoColor.innerText = codigoColor.innerText.concat(HEXA[posicionArray]);
    colorInicio = codigoColor.innerText;
    document.body.style.background = colorInicio;
  }
}

BOTON.addEventListener('click', generarColorHexa);
