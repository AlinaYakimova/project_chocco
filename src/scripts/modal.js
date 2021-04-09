(function(){

  $(".form").submit(e => {
    e.preventDefault();

    $.fancybox.open({
      src: "#modal",
      type: "inline"
    })
  });

  $(".js-submit-button").click(e => {
    e.preventDefault();

    $.fancybox.close();
  })
})();