(function () {
  const buttons = document.querySelectorAll(".feedback__link");
  const items = document.querySelectorAll(".feedback__card");
  let step = setCurrentWidth();

  window.addEventListener("resize", () => {
    step = setCurrentWidth();
  });

  buttons.forEach((element, index) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      buttons.forEach((button, i) => {
        button.classList.remove('feedback__link--active');
        items[i].classList.remove('feedback__card--active');
      })
     
      element.classList.add('feedback__link--active');
      items[index].classList.add('feedback__card--active');
    });
  });
  
  function setCurrentWidth() {
    let itemWidth = document.querySelector(".feedback__wrap").clientWidth;
    items.forEach(i => {
      i.style.width = `${itemWidth}px`;
    })
    return itemWidth;
  };
})();