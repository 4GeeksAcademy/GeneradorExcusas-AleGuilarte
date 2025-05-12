import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

const sujeto = ["Mi hijo", "Mi mujer", "Mi madre", "Mi padre"];
const verbo = ["a roto", "a quemado", "a perdido"];
const objeto = ["mi portatil", "mi coche",];
const lugar = ["en el parking", "en la casa de mi abuela", "en el trabajo", "en donde los suegros"];

function generarExcusa () {

  const excSujeto = sujeto[numeroRandom(sujeto.length)];
  const excVerbo = verbo[numeroRandom(verbo.length)];
  const excObjeto = objeto[numeroRandom(objeto.length)];
  const excLugar = lugar[numeroRandom(lugar.length)];

  const excusa = `${excSujeto} ${excVerbo} ${excObjeto} ${excLugar}`;
  document.getElementById("excuse").textContent = excusa;
  
}
function numeroRandom (nun) {
 return Math.floor(Math.random() * nun) 
}

const boton = document.getElementById(("botonexcusa"))
boton.addEventListener("click", generarExcusa)

window.onload = generarExcusa