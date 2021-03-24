(function(){

let button = document.querySelector("#toggle");
let menu = document.querySelector(".fullscreen-menu");
let body = document.querySelector("body");

let toggleMenu = function() {
  button.classList.toggle(".is-active");
  menu.classList.toggle(".fullscreen-menu--active");
  body.classList.toggle("body-active-menu");
}

button.addEventListener("click", toggleMenu)
});