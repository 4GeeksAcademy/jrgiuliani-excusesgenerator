/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let quien = who[Math.floor(Math.random() * who.length)];
  let action = ["ate", "peed", "crushed", "broke"];
  let accion = action[Math.floor(Math.random() * action.length)];
  let what = ["my homework", "the keys", "the car"];
  let que = what[Math.floor(Math.random() * what.length)];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let cuando = when[Math.floor(Math.random() * when.length)];

  let excusePhrase = document.getElementById("excuse");
  let newPhrase = quien + " " + accion + " " + que + " " + cuando;
  excusePhrase.innerText = newPhrase;
};
