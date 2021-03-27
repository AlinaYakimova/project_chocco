(function () {
  const buttons = document.querySelectorAll('.team-button');
  const memberDesc = document.querySelectorAll('.team-dropdown');
  const memberPic = document.querySelectorAll('.member__pic');
  
  // let toggleDropdown = function () {
  //   buttons.classList.toggle('team-button--is-active');
  //   memberDesc.classList.toggle('team-dropdown--open');
  // }
  // buttons.addEventListener('click', toggleDropdown);

  buttons.forEach((element, index) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      buttons.forEach((button, i) => {
        button.classList.toggle('team-button--is-active');
        memberDesc[i].classList.toggle('team-dropdown--is-active');
        memberPic[i].classList.toggle('member__pic--is-active');

        button.classList.remove('team-button--is-active');
        memberDesc[i].classList.remove('team-dropdown--is-active');
        memberPic[i].classList.remove('member__pic--is-active');
      })

      element.classList.add('team-button--is-active');
      memberDesc[index].classList.add('team-dropdown--is-active');
      memberPic[index].classList.add('member__pic--is-active');
    });
  });


  // menu.addEventListener("click", (e) => {
  //   if (e.target.classList.contains("overlay-menu__link")) {
  //     toggleMenu()
  //   }
  // });
})();