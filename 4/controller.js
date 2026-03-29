const CalculatorController = (function (model, view) {
  const keysContainer = document.getElementById("calculator");

  function updateView() {
    const state = model.getDisplay();
    view.render(state);
  }

  function handleClick(event) {
    const target = event.target;
    if (!target.matches("button")) return;

    const action = target.dataset.action;
    const value = target.dataset.value;

    switch (action) {
      case "number":
        model.inputNumber(value);
        break;
      case "operator":
        model.inputOperator(value);
        break;
      case "equals":
        model.compute();
        break;
      case "clear":
        model.clearAll();
        break;
      default:
        return;
    }

    updateView();
  }

  function init() {
    keysContainer.addEventListener("click", handleClick);
    updateView();
  }

  return {
    init,
  };
})(CalculatorModel, CalculatorView);

CalculatorController.init();
