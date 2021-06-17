/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = genearExcusa();
  });
  console.log("Hello Rigor from  the console! ");
};
let genearExcusa = () => {
  let pronoun = ["Un/a", "La/El"];
  let subject = [
    "mosca 🦟",
    "gato 🐱",
    "perro 🐶",
    "payaso 🤡",
    "abuelita 🤶",
    "Mickey 🐭"
  ];
  let action = ["tomo mi", "tiró mi", "le grito a mi", "robo mi", "mordio mi"];
  let possetion = [
    "tarea 📖",
    "auto 🚗",
    "bicicleta 🚲",
    "zapato 👞",
    "dedo del pie 🦶"
  ];
  let where = ["en la calle.", "en mi casa. ", "en la entrada del colegio."];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
