(function () {

  const form = document.querySelector(".form");
  const send = document.querySelector("#form-submit");

  const phone = document.querySelector("#number-phone");

  phone.addEventListener("keydown", (e) => {
    // console.log(e.key);
    try {
      let isDigit = false;
      let isPlus = false;
      let isDash = false;
      let isAction = false;

      if (e.key >= 0 || e.key <= 9) {
        isDigit = true;
      }

      if (e.key == "+") {
        isPlus = true;
      }

      if (e.key == "-") {
        isDash = true;
      }

      if (e.key == "ArrowLeft" || e.key == "ArrowRight" || e.key == "Backspace") {
        isAction = true;
      }

      if (!isDigit && !isPlus && !isDash && !isAction) {
        e.preventDefault();
        throw new Error("Введите число,+,-")
      }
      e.target.nextElementSibling.textContent = "";
    } catch (error) {
      e.preventDefault();
      e.target.nextElementSibling.textContent = error.message;
    }
  });

  send.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateForm(form)) {
      console.log("Отправляем на сервер");
      const request = $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "POST",
        data: {
          name: form.elements.name.value,
          phone: form.elements.phone.value,
          comment: form.elements.comment.value,
          to: form.elements.to.value
        }
      });
     request.done(function (data) {
       console.log("done", data);
      $(".modal__content").text(data.message);
      form.elements.name.value = "";
      form.elements.phone.value = "";
      form.elements.comment.value = "";

     });
     request.fail(function (data) {
      console.log("fail", data);
       $(".modal__content").text(data.responseJSON.message);
     });
     request.always(
      $.fancybox.open({
        src: "#modal",
        type: "inline"
      })
     );
    }
  });

  function validateForm(form) {
    console.log(form);
    let valid = true;

    if (!validate(form.elements.name)) {
      valid = false;
    }
    if (!validate(form.elements.phone)) {
      valid = false;
    }
    if (!validate(form.elements.comment)) {
      valid = false;
    }
    return valid;
  }

  function validate(element) {
    console.log("element before trem:", element.value);
    element.value = element.value.trim(); // для удаления пробелов сначала и в конце.
    console.log("element after trem:", element.value);

    if (!element.checkValidity()) {
      element.nextElementSibling.textContent = element.validationMessage;
      element.style.border = "1px solid red";
      return false;
    } else {
      element.nextElementSibling.textContent = "";
      element.style.border = "none";
      return true;
    }
  }
})();