/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// const deck = document.querySelector("#palo1");
const number = document.querySelector("#number");
// const deck2 = document.querySelector("#palo2");
// const botonEliminar = document.querySelector("#eliminar");
// const botonPickOne = document.querySelector("#start");

//LETS
const numbers = {
  1: "A",
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  10: 9,
  11: "J",
  12: "Q",
  13: "K"
};

for (const item in numbers) {
  console.log;
}
//FUNCIONES PARA EL WINDOW ON LOAD
// const generatePalo = () => {
//   let paloIndex = Math.floor(Math.random() * palos.length);
//   return palos[paloIndex];
// };
// const generateNumber = () => {
//   let numerosIndex = Math.floor(Math.random() * numeros.length);
//   return numeros[numerosIndex];
// };

//LOOP PARA RECORRER LOS ARRAYS Y ME SUELTE COMBINACIONES AL AZAR
//MIENTRAS HACE ITERACIONES, ME AGREGA LAS COMBINACIONES EN UN
//NUEVO ARRAY VACIO
// let mazoNuevoDeCartas = [];
// let posicion = 0;
// for (let i = 0; i < palos.length; i++) {
//   for (let j = 0; j < numeros.length; j++) {
//     let baraja = [palos[i], numeros[j]];
//     mazoNuevoDeCartas.push(baraja);
//     mazoNuevoDeCartas.sort(() => Math.random() - 0.5);
//   }
// }

//FUNCION PARA BOTON 1
//
// const cartaAlAzar = () => {
//   botonEliminar.disabled = false;
//   let cartaParaMostrar = mazoNuevoDeCartas[posicion];
//   deck.innerHTML = cartaParaMostrar[0];
//   deck2.innerHTML = cartaParaMostrar[0];
//   number.innerHTML = cartaParaMostrar[1];
//   posicion = posicion + 1;

//   if (posicion == mazoNuevoDeCartas.length - 1) {
//     deck.innerHTML = "";
//     deck2.innerHTML = "";
//     number.innerHTML = "";
//     botonPickOne.disabled = true;
//     //console.log(mazoNuevoDeCartas);
//     alert("Han salido todas las cartas");
//   }
// };
//FUNCION PARA REINICIAR EL MAZO DE CARTAS, CUANDO PRESIONO RESET
// const random = mazoNuevoDeCartas => {
//   mazoNuevoDeCartas.sort(() => Math.random() - 0.5);
//   return mazoNuevoDeCartas;
// };

//FUNCION PARA EL BOTON 2
// const borrar = () => {
//   mazoNuevoDeCartas = random(mazoNuevoDeCartas);
//   posicion = 0;
//   number.innerHTML = "X";
//   deck.innerHTML = "";
//   deck2.innerHTML = "";
//   botonPickOne.disabled = false;
//   botonEliminar.disabled = true;
// };

//LISTENERS PARA BOTONES

//LISTENER BOTON 1
// botonPickOne.addEventListener("click", cartaAlAzar);
// start.addEventListener("click", cartaAlAzar);

//LISTENER BOTON 2
// botonEliminar.addEventListener("click", borrar);

//CUANDO CARGA LA PANTALLA, MUESTRA COMBINACIÓN DE CARTAS AL AZAR
// window.onload = () => {
//   deck.innerHTML = generatePalo();
//   deck2.innerHTML = deck.innerHTML;
//   number.innerHTML = generateNumber();
//   botonEliminar.disabled = true;
// };
