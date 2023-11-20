const textAreaEl = document.querySelector("textarea");
const displayCharacters = document.querySelector(".stat__number--characters");

textAreaEl.addEventListener("input", function () {
  const numberOfCharacters = textAreaEl.value.length;
  const displayCharacters = document.querySelector(".stat__number--characters");
  displayCharacters.textContent = numberOfCharacters;
});
