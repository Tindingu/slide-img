const list = document.querySelectorAll(".panel");
for (let li of list) {
  li.addEventListener("click", function () {
    removeall();
    li.classList.add("active");
  });
}
function removeall() {
  for (let li of list) {
    li.classList.remove("active");
  }
}
