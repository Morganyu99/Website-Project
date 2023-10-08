const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function (event) {
    this.classList.toggle("collapsible--expanded");
  })
);
