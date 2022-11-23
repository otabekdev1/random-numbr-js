const number = document.getElementById("number");
const btn = document.getElementById("generate");
const randomNum = () => {
  return Math.floor(Math.random() * 100);
};
btn.addEventListener("click", () => {
  number.innerHTML = randomNum();
});
