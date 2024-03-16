/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here. Este código crea un generador de excusas, toma aleatoreamente elementos de los arreglos y los muestra en un string.

  //Arreglos:

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  // Variables seleccion de texto aleatorio para cada arreglo.

  let quien = who[Math.floor(Math.random() * who.length)];
  let accion = action[Math.floor(Math.random() * action.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let cuando = when[Math.floor(Math.random() * when.length)];

  // Enlace con el archivo HTML a traves del id del <p> y modificacion con texto aleatorio.

  let excusePhrase = document.getElementById("excuse");
  let newPhrase = `${quien} ${accion} ${que} ${cuando}.`;
  excusePhrase.innerText = newPhrase;
};
