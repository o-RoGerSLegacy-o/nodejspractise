const currentTime = document.querySelector(".para");
const buttonParent = document.querySelector(".btn-container");

function handlerButtonClick(event) {
  const button = event.target.name;
}

buttonParent.addEventListener("click", handlerButtonClick);
