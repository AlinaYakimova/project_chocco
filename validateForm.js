(function () {

  const form = document.querySelector(".form");
  const send = document.querySelector("#form-submit");

  const phone = document.querySelector("#number-phone");

  phone.addEventListener("keydown", (e)=>{
    // console.log(e.key);
    try {
    let isDigit = false;
    let isPlus = false;
    let isDash = false;
    let isAction = false;

    if(e.key >=0 || e.key<=9){
      isDigit = true;
    }

    if(e.key == "+"){
      isPlus = true;
    }

    if(e.key == "-"){
      isDash = true;
    }

    if(e.key == "ArrowLeft" || e.key == "ArrowRight" || e.key == "Backspace"){
      isAction = true;
    }

    if(!isDigit && !isPlus && !isDash && !isAction){
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
    if(validateForm(form)) {
      console.log("Отправляем на сервер");
    } else {
      console.log("Ошибка");
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
    if (!element.checkValidity()) {
      // для удаления пробелов сначала и в конце.
      element.value.trim();
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