window.onload = function () {
  const subjects = JSON.parse(localStorage.getItem("subjects")) || [
    "My dog",
    "My cat",
    "My neighbor",
    "Aliens",
    "My grandma",
    "My friend",
    "A random stranger",
  ];
  const actions = JSON.parse(localStorage.getItem("actions")) || [
    "ate",
    "destroyed",
    "spilled coffee on",
    "abducted",
    "peed on",
    "forgot about",
    "borrowed",
  ];
  const objects = JSON.parse(localStorage.getItem("objects")) || [
    "my homework",
    "my project",
    "my car keys",
    "the internet connection",
    "my shoes",
    "my lunch",
    "my bike",
  ];
  const times = JSON.parse(localStorage.getItem("times")) || [
    "right before the deadline",
    "this morning",
    "last night",
    "during lunch",
    "while I was sleeping",
    "while I was on a call",
    "just now",
  ];


  const generateExcuse = () => {
    const randomIndex = (array) => Math.floor(Math.random() * array.length);

    const randomSubject = subjects[randomIndex(subjects)];
    const randomAction = actions[randomIndex(actions)];
    const randomObject = objects[randomIndex(objects)];
    const randomTime = times[randomIndex(times)];

    return `${randomSubject} ${randomAction} ${randomObject} ${randomTime}`;
  };


  const saveToLocalStorage = () => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
    localStorage.setItem("actions", JSON.stringify(actions));
    localStorage.setItem("objects", JSON.stringify(objects));
    localStorage.setItem("times", JSON.stringify(times));
  };

 
  const generateButton = document.getElementById("generate-btn");
  const excuseText = document.getElementById("excuse");

  generateButton.addEventListener("click", () => {
    excuseText.innerText = generateExcuse();
  });

  const addItemForm = document.getElementById("add-item-form");
  addItemForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const category = document.getElementById("category").value;
    const newItem = document.getElementById("new-item").value.trim();

    if (newItem) {
      switch (category) {
        case "who":
          subjects.push(newItem);
          break;
        case "action":
          actions.push(newItem);
          break;
        case "what":
          objects.push(newItem);
          break;
        case "when":
          times.push(newItem);
          break;
        default:
          console.error("Try again!");
      }

      saveToLocalStorage();
      alert(`Added "${newItem}" to ${category}`);
      document.getElementById("new-item").value = ""; 
    } else {
      alert("Please enter a valid item!");
    }
  });

  console.log("Excuse generator loaded successfully!");
};