console.log("JavaScript virker!");
const pumpkin = document.querySelector("#pumpkin");
const info = document.querySelector("#pumpkin-info");

function showPumpkinFact() {
  info.textContent = "Vidste du, at verdens største græskar kan veje over 1.000 kg?";

  pumpkin.style.fill = "rgb(46, 206, 124)";
}

pumpkin.addEventListener("click", showPumpkinFact);

pumpkin.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showPumpkinFact();
  }
});
