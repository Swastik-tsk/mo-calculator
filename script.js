const display = document.querySelector(".display h1");
const keys = document.querySelectorAll(".key");

let expression = "";

keys.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    if (value === "AC") {
      expression = "";
      display.innerText = "0";
      return;
    }

    if (value === "DEL") {
      expression = expression.slice(0, -1);
      display.innerText = expression || "0";
      return;
    }

    if (value === "=") {
      try {
        expression = eval(expression).toString();
        display.innerText = expression;
      } catch {
        display.innerText = "Error";
        expression = "";
      }
      return;
    }

    expression += value;
    display.innerText = expression;
  });
});
