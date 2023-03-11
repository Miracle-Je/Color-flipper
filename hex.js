const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexcode = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hex.length);
    hexcode += hex[randomNumber];
  }
  document.body.style.backgroundColor = hexcode;
  color.innerHTML = hexcode;
});
