(function () {

  const leftArrow = document.querySelector("#left");
  const rightArrow = document.querySelector("#right");
  const itemsList = document.querySelector("#shop__sliders");
  const computedStyles = window.getComputedStyle(itemsList);
  const items = document.querySelectorAll(".slide");
  let step = setCurrentWidth();
  const maxRight = items.length * step;
  let currentRight = 0;

  itemsList.style.right = currentRight;

  window.addEventListener("resize", () => {
    step = setCurrentWidth();
  });

  rightArrow.addEventListener("click", (e) => {
    changeSlide(e, "right");
  });

  leftArrow.addEventListener("click", (e) => {
    changeSlide(e, "left");
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
    let itemWidth = document.querySelector(".shop__sliders-wrap").clientWidth;
    items.forEach(item => {
      item.style.width = `${itemWidth}px`;
    })
    return itemWidth;
  };
})();

  /*// const leftArrow = document.querySelector("#left");
  // const rightArrow = document.querySelector("#right");
  // const itemsList = document.querySelector("#shop__sliders");
  // const computedStyles = window.getComputedStyle(itemsList);
  // const minRight = 0;
  // const items = document.querySelectorAll(".slide");
  // let step = setCurrentWidth();
  // const maxRight = step * items.length;
  // let currentRight = 0;

  // window.addEventListener("resize", () => {
  //   step = setCurrentWidth();
  // });

  // function setCurrentWidth(){
  //   let itemWidth = document.querySelector(".shop__sliders-wrap").clientWidth;
  //   items.forEach(item=>{
  //     item.style.width = `${itemWidth}px`
  //   })
  //   return itemWidth;
  // }

  // rightArrow.addEventListener("click", function (event) {
  //   event.preventDefault();

  //   if (currentRight < maxRight) {
  //     currentRight += step;
  //     itemsList.style.right = `${currentRight}px`;
  //   } else {
  //     itemsList.appendChild(itemsList.firstElementChild);
  //   }
  // });

  // leftArrow.addEventListener("click", function (event) {
  //   event.preventDefault();

  //   if (currentRight > 0) {
  //     currentRight -= step;
  //     itemsList.style.right = `${currentRight}px`;
  //   }
  // });*/

