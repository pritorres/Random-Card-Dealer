/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const iconoSup = document.getElementById("pinta-top");
  const myNumero = document.getElementById("numero");
  const iconoInf = document.getElementById("pinta-bottom");

  let numeroPinta = Math.floor(Math.random(0 - 4) * 4);
  let numeroCarta = Math.floor(Math.random(0 - 13) * 13);

  let myPinta = ["diamond", "heart", "club", "spade"];
  let myArray = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  myNumero.innerHTML = myArray[numeroCarta];
  iconoSup.classList.add(myPinta[numeroPinta]);
  iconoInf.classList.add(myPinta[numeroPinta]);
};
