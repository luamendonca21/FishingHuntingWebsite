const productContainers = [...document.querySelectorAll(".product-container")];
const nextBtn = [...document.querySelectorAll(".next-btn")];
const preBtn = [...document.querySelectorAll(".previous-btn")];

/* percorrer cada card usando o metodo for each*/
productContainers.forEach((item, i) => {
  /*retorna as dimensoes do elemento*/
  let containerDimensions = item.getBoundingClientRect();

  /*guardar a width do container*/
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
