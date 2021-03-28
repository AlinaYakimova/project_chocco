(function () {
  const buttons = document.querySelectorAll('.team-button');
  const content = document.querySelectorAll('.team-dropdown');
  const memberDesc = document.querySelectorAll('.member__desc');

  function hideAccordeon() {
    for (let i = 0; i < content.length; i++) {
      content[i].style.height = "0px";
      content[i].classList.remove("team-dropdown--is-active");
      buttons[i].classList.remove("team-button--is-active");
    }
  }

  function showAccordeon(i) {
    let height = getComputedStyle(memberDesc[i]).height;
    content[i].style.height = `${height}`;
    content[i].classList.add("team-dropdown--is-active");
    buttons[i].classList.add("team-button--is-active");
  }

  for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", (e) => {
      e.preventDefault();

      if (content[i].classList.contains("team-dropdown--is-active")) {
        hideAccordeon();
      } else {
        hideAccordeon()
        showAccordeon(i)
      }
    })
  }


  // мой вариант
  // buttons.forEach((element, index) => {

  //   element.addEventListener("click", (e) => {
  //     e.preventDefault();

  //       buttons.forEach((btn, i) => {

  //         btn.classList.toggle('team-button--is-active');
  //         content[i].classList.toggle('team-dropdown--is-active--2');
  //         memberDesc[i].classList.toggle('member__desc--is-active');

  //         btn.classList.remove('team-button--is-active');
  //         content[i].classList.remove('team-dropdown--is-active--2');
  //         memberDesc[i].classList.remove('member__desc--is-active');
  //       })

  //     element.classList.add('team-button--is-active');
  //     content[index].classList.add('team-dropdown--is-active--2');
  //     memberDesc[index].classList.add('member__desc--is-active');

  //     content.forEach((element, ind) => {
  //       element.addEventListener("click", (e) => {

  //         element.classList.remove('team-button--is-active');
  //         content[ind].classList.remove('team-dropdown--is-active--2');
  //         memberDesc[ind].classList.remove('member__desc--is-active');
  //       })
  //     })
  //   })
  // });


})();


