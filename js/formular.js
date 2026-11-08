const form = document.querySelector("#signup-form");
const feedback = document.querySelector("#form-feedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const competition = document.querySelector("#competition");
  const selectedCompetition = competition.options[competition.selectedIndex].text;

  feedback.textContent = `Tak for din interesse, ${name}! Du har valgt ${selectedCompetition}.`;

  form.reset();
});
