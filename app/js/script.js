const button = document.querySelector('.button');
const options = {
  "capture": true,
  "once": false,
  "passive": false
};

function showConsole(event) {
  console.log(event.type);
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.clientX);
  console.log(event.clientY);
  console.log(event);
};

button.addEventListener("click", showConsole, options)
