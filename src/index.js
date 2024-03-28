const button = document.querySelector("header > button");
function handleClickButton() {
  const header = document.getElementsByTagName("header")[0];
  header.classList.toggle("open");
}
button.addEventListener("click", handleClickButton);
