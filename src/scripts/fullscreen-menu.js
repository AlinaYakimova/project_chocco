(function(){

  let button = document.querySelector("#toggle");
  let menu = document.querySelector(".fullscreen-menu");
  let body = document.querySelector("body");

  let toggleMenu = function () {
    button.classList.toggle("is-active");
    menu.classList.toggle("fullscreen-menu--active");
    body.classList.toggle("body-active-menu");

  }

  button.addEventListener("click", toggleMenu)
  // меню.отслеживатьСобытия("клик", функция(событие))
  menu.addEventListener("click", function (event) {
    // if(событие.цель.список классов.содержит("меню линк")) {
    if (event.target.classList.contains("menu__link")) {
      toggleMenu()
    }
    // console.log(event.target.classList.contains("menu__link"));
    // console.log(event.target)
  });
})();