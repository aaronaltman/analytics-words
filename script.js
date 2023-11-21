const textAreaEl = document.querySelector("textarea");
const displayCharacters = document.querySelector(".stat__number--characters");
const displayFacebook = document.querySelector(".stat__number--facebook");
const displayTwitter = document.querySelector(".stat__number--twitter");
const displayWords = document.querySelector(".stat__number--words");

const inputHandler = () => {
  /* here is the characters */
  const numberOfCharacters = textAreaEl.value.length;
  const displayCharacters = document.querySelector(".stat__number--characters");
  displayCharacters.textContent = numberOfCharacters;

  /* here is the facebook */
  const numberOfFacebook = Math.ceil(2200 - numberOfCharacters);
  const displayFacebook = document.querySelector(".stat__number--facebook");
  displayFacebook.textContent = numberOfFacebook;

  /* here is the twitter */
  const numberOfTwitter = Math.ceil(280 - numberOfCharacters);
  const displayTwitter = document.querySelector(".stat__number--twitter");
  displayTwitter.textContent = numberOfTwitter;

  /* here is the words */
  const numberOfWords = textAreaEl.value.split(" ").length;
  let displayWords = document.querySelector(".stat__number--words");
  displayWords.textContent = numberOfWords;
  if (numberOfCharacters === 0) {
    displayWords.textContent = 0;
  }

  // set visual cues
  if (numberOfTwitter < 0) {
    displayTwitter.classList.add("stat__number--limit");
    if (numberOfFacebook < 0) {
      displayFacebook.classList.add("stat__number--limit");
    }
  } else {
    displayTwitter.classList.remove("stat__number--limit");
    displayFacebook.classList.remove("stat__number--limit");
  }
  if (textAreaEl.value.includes("<script>")) {
    alert("You can't use script tag in this text area");
    textAreaEl.value = "try again";
  }
};

textAreaEl.addEventListener("input", inputHandler);
