const sections = $("section");
const display = $(".main-content");

// sections.first().addClass("active");

// const performTransition = sectionEq => {
//   const position = sectionEq * -100;

//   display.css({
//     transform: `translateY(${position}%)`,
//   })

//   sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
// }

// const scrollViewport = direction => {
//   const activeSection = sections.filter(".active");
//   const nextSection = activeSection.next();
//   const prevSection = activeSection.prev();

//   if (direction === "next") {
//     performTransition(nextSection.index())
//   }

//   if (direction === "prev") {
//     performTransition(prevSection.index())
//   }
// }

$(window).on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;

  console.log(deltaY);

  // if (deltaY > 0) {
  //   // next
  //   scrollViewport("next");
  // }

  // if (deltaY < 0) {
  //   // prev
  // }
  // scrollViewport("prev");
});