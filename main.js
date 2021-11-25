const card = document.querySelector(".card");
const changeSide = document.querySelectorAll(".changeSide");

for (let i = 0; i < changeSide.length; i++) {
  changeSide[i].addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
}
