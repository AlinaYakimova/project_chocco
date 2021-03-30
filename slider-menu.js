(function () {
  const buttons = document.querySelectorAll(".slider-menu__item");
  const content = document.querySelectorAll(".slider-menu__text-wrap");
  const text = document.querySelectorAll(".slider-menu__text");

  function hideAccordeon() {
    for (let i = 0; i < content.length; i++) {
      content[i].style.width = "0px";
      buttons[i].classList.remove("slider-menu__item--is-active");
    }
  }

  function showAccordeon(i) {
    let width = getComputedStyle(text[i]).width;
    content[i].style.width = `${width}`;
    buttons[i].classList.add("slider-menu__item--is-active");
    console.log(content);
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
      e.preventDefault();

      if(buttons[i].classList.contains("slider-menu__item--is-active")) {
        hideAccordeon();
      } else {
        hideAccordeon()
        showAccordeon(i)
      }
    })
  }
})();