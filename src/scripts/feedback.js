(function(){
  
  const buttons = document.querySelectorAll(".feedback__link");
  const items = document.querySelectorAll(".feedback__card");

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
  
})();
