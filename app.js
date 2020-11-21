const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");


modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

modalBtn.addEventListener("click", function () {
  modal.classList.remove("close-modal");
});

