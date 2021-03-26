(function () {
  const buttons = document.querySelectorAll(".feedback__item");
  const card = document.querySelectorAll(".feedback__card");
  const itemsList = document.querySelector(".feedback__list-card");
  const computedStyles = window.getComputedStyle(itemsList);
  let step = setCurrentWidth();
  const maxRight = card.length * step;
  let currentRight = 0;

  itemsList.style.right = currentRight;

  window.addEventListener("resize", () => {
    step = setCurrentWidth();
  });

  buttons.forEach((e, i) => {
    e.addEventListener("click", (e) => {
      changeSlide(e, "right");
    });
  });

  function changeSlide(e, direction) {
    e.preventDefault();
    if (direction === "right") {
      if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
      }
      if (currentRight == maxRight) {
        currentRight = 0;
        itemsList.style.right = `0px`;
      }
    }
    else {
      if (currentRight >= 0) {
        currentRight -= step;
        itemsList.style.right = currentRight + "px";
      }
      if (currentRight < 0) {
        currentRight = maxRight - step;
        itemsList.style.right = currentRight + "px";
      }
    }
  };

  function setCurrentWidth() {
    let itemWidth = document.querySelector(".feedback__wrap").clientWidth;
    card.forEach(i => {
      i.style.width = `${itemWidth}px`;
    })
    return itemWidth;
  }
})();