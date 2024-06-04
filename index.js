document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  const name = document.querySelector(`.name`);

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const action = button.getAttribute("data-action");
      const value = button.getAttribute("data-value");

      switch (action) {
        case "clear":
          clearDisplay();
          break;
        case "append":
          appendToDisplay(value);
          break;
        case "calculate":
          calculateResult();
          break;
      }

      display.style.textAlign = `left`;
    });
  });

  function clearDisplay() {
    display.innerText = "";
  }

  function appendToDisplay(value) {
    if (display.innerText === "") {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }

  function calculateResult() {
    try {
      display.innerText = eval(display.innerText);
    } catch (e) {
      display.innerText = "Error";
      setTimeout(function () {
        display.innerText = "";
      }, 3000);
    }
  }

  name.addEventListener(`click`, function () {
    display.style.textAlign = `center`;
    display.innerText = `This was created by Danny and assisted by ChatGPT`;
    setTimeout(function () {
      display.innerText = ``;
    }, 2000);
  });
});
