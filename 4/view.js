const CalculatorView = (function () {
  const expressionEl = document.getElementById("expression");
  const resultEl = document.getElementById("result");

  function render(state) {
    expressionEl.textContent = state.expression;
    resultEl.textContent = state.result;
  }

  return {
    render,
  };
})();
