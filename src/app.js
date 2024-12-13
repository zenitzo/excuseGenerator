/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const excuses = [
    "My dog ate my homework.",
    "I forgot it at home.",
    "The internet was down.",
    "Aliens abducted my project.",
    "I had a flat tire.",
    "My cat spilled coffee on it.",
    "I overslept.",
    "The power went out.",
    "I was abducted by ninjas.",
    "Traffic was insane."
  ];

  const generateExcuse = () => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    return excuses[randomIndex];
  };

  const button = document.getElementById("generate-btn");
  const excuseText = document.getElementById("excuse");

  button.addEventListener("click", () => {
    excuseText.innerText = generateExcuse();
  });

  console.log("Excuse generator loaded successfully!");
};
