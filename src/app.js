window.onload = function () {

  const defaultSubjects = ["My dog", "My cat", "My neighbor", "Aliens", "My grandma", "My friend", "A random stranger"];
  const defaultActions = ["ate", "destroyed", "spilled coffee on", "abducted", "peed on", "forgot about", "borrowed"];
  const defaultObjects = ["my homework", "my project", "my car keys", "the internet connection", "my shoes", "my lunch", "my bike"];
  const defaultTimes = ["right before the deadline", "this morning", "last night", "during lunch", "while I was sleeping", "while I was on a call", "just now"];

  const themes = {
    default: {
      subjects: defaultSubjects,
      actions: defaultActions,
      objects: defaultObjects,
      times: defaultTimes,
    },
    work: {
      subjects: ["My boss", "The IT department", "A coworker", "The CEO", "The intern", "The client", "The printer"],
      actions: ["deleted", "lost", "misplaced", "ignored", "overwrote", "cancelled", "blocked"],
      objects: ["my report", "the presentation", "my email", "the meeting agenda", "the budget", "the contract", "my files"],
      times: ["right before the meeting", "during the presentation", "last Friday", "while I was on vacation", "during the audit", "just before the deadline", "this morning"],
    },
    school: {
      subjects: ["My teacher", "The principal", "A classmate", "The janitor", "The librarian", "The bus driver", "The substitute"],
      actions: ["lost", "spilled juice on", "forgot to grade", "accidentally shredded", "misplaced", "spilled coffee on", "deleted"],
      objects: ["my homework", "my textbook", "my project", "my permission slip", "my lunch money", "my notes", "my backpack"],
      times: ["right before class", "during lunch", "last night", "while I was studying", "during the assembly", "just before the bell", "this morning"],
    },
    funny: {
      subjects: ["A ninja", "A clown", "A zombie", "A unicorn", "A pirate", "A robot", "A wizard"],
      actions: ["danced on", "exploded", "teleported", "magically transformed", "sneezed on", "buried", "laughed at"],
      objects: ["my sandwich", "the moon", "my socks", "the fridge", "my phone", "the couch", "my dreams"],
      times: ["in the middle of the night", "during breakfast", "while I was watching TV", "during a thunderstorm", "while I was brushing my teeth", "just as I woke up", "during the apocalypse"],
    },
  };

  
  let subjects = JSON.parse(localStorage.getItem("subjects")) || defaultSubjects;
  let actions = JSON.parse(localStorage.getItem("actions")) || defaultActions;
  let objects = JSON.parse(localStorage.getItem("objects")) || defaultObjects;
  let times = JSON.parse(localStorage.getItem("times")) || defaultTimes;

  // Function to generate a random excuse
  const generateExcuse = () => {
    const randomIndex = (array) => Math.floor(Math.random() * array.length);

    const randomSubject = subjects[randomIndex(subjects)];
    const randomAction = actions[randomIndex(actions)];
    const randomObject = objects[randomIndex(objects)];
    const randomTime = times[randomIndex(times)];

    return `${randomSubject} ${randomAction} ${randomObject} ${randomTime}`;
  };

  // Function to save word lists to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
    localStorage.setItem("actions", JSON.stringify(actions));
    localStorage.setItem("objects", JSON.stringify(objects));
    localStorage.setItem("times", JSON.stringify(times));
  };

  // DOM Elements
  const generateButton = document.getElementById("generate-btn");
  const excuseText = document.getElementById("excuse");
  const themeSelect = document.getElementById("theme-select");

  // Update word lists based on selected theme
  themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;
    subjects = themes[selectedTheme].subjects;
    actions = themes[selectedTheme].actions;
    objects = themes[selectedTheme].objects;
    times = themes[selectedTheme].times;
  });

  // Generate excuse on button click
  generateButton.addEventListener("click", () => {
    excuseText.innerText = generateExcuse();
  });

  // Add new item to the selected category
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