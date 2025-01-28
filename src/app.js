window.onload = function () {
  // Split excuses into parts 
  const subjects = [
    "My dog",
    "My cat",
    "My neighbor",
    "Aliens",
    "My grandma",
    "My friend",
    "A random stranger",
  ];
  const actions = [
    "ate",
    "destroyed",
    "spilled coffee on",
    "abducted",
    "peed on",
    "forgot about",
    "borrowed",
  ];
  const objects = [
    "my homework",
    "my project",
    "my car keys",
    "the internet connection",
    "my shoes",
    "my lunch",
    "my bike",
  ];
  const times = [
    "right before the deadline",
    "this morning",
    "last night",
    "during lunch",
    "while I was sleeping",
    "while I was on a call",
    "just now",
  ];

  // Function to generate a random excuse
  const generateExcuse = () => {
    const randomIndex = (array) => Math.floor(Math.random() * array.length);

    const randomSubject = subjects[randomIndex(subjects)]
    const randomAction = actions[randomIndex(actions)]
    const randomObject = objects[randomIndex(objects)]
    const randomTime = times[randomIndex(times)]

    return (
      `${randomSubject} ${randomAction} ${randomObject} ${randomTime}`
    );
  };

  // Attach the click event to the button
  const button = document.getElementById("generate-btn");
  const excuseText = document.getElementById("excuse");

  button.addEventListener("click", () => {
    excuseText.innerText = generateExcuse();
  });

  console.log("Excuse generator loaded successfully!");
};