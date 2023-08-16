const currentTime = document.querySelector(".para");
const buttonParent = document.querySelector(".btn-container");

function handlerButtonClick(event) {
  console.log(event.target);
}

buttonParent.addEventListener("click", handlerButtonClick);
