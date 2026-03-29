const CalculatorModel = (function () {
  let operand1 = null;
  let operator = null;
  let operand2 = null;
  let displayValue = "0";
  let expressionText = "";
  let lastButtonType = null;

  function updateExpression() {
    if (operand1 === null) {
      expressionText = displayValue;
    } else if (operator && operand2 === null) {
      expressionText = `${operand1} ${operator}`;
    } else if (operator && operand2 !== null) {
      expressionText = `${operand1} ${operator} ${operand2}`;
    } else {
      expressionText = displayValue;
    }
  }

  function clearAll() {
    operand1 = null;
    operator = null;
    operand2 = null;
    displayValue = "0";
    expressionText = "";
    lastButtonType = null;
  }

  function inputNumber(num) {
    if (lastButtonType === "equals") {
      clearAll();
    }

    if (operator === null) {
      if (displayValue === "0" && num !== ".") {
        displayValue = num;
      } else if (displayValue.includes(".") && num === ".") {
        return;
      } else {
        displayValue += num;
      }
      operand1 = parseFloat(displayValue);
    } else {
      if (operand2 === null || lastButtonType === "operator") {
        displayValue = num === "." ? "0." : num;
      } else if (displayValue.includes(".") && num === ".") {
        return;
      } else {
        displayValue += num;
      }
      operand2 = parseFloat(displayValue);
    }

    lastButtonType = "number";
    updateExpression();
  }

  function inputOperator(op) {
    if (operand1 === null) {
      operand1 = parseFloat(displayValue);
    }

    if (operator && operand2 !== null && lastButtonType !== "operator") {
      compute();
    }

    operator = op;
    operand2 = null;
    lastButtonType = "operator";
    updateExpression();
  }

  function compute() {
    if (operator === null || operand1 === null) {
      return;
    }

    const a = operand1;
    const b = operand2 === null ? operand1 : operand2;
    let value = null;

    const performedOperator = operator;

    switch (operator) {
      case "+":
        value = a + b;
        break;
      case "-":
        value = a - b;
        break;
      case "*":
        value = a * b;
        break;
      case "/":
        if (b === 0) {
          clearAll();
          displayValue = "Eroare: impartire la 0";
          expressionText = "";
          lastButtonType = "equals";
          return;
        }
        value = a / b;
        break;
      default:
        return;
    }

    if (!Number.isFinite(value) || Number.isNaN(value)) {
      clearAll();
      displayValue = "Eroare";
      expressionText = "";
      lastButtonType = "equals";
      return;
    }

    if (Number.isInteger(value)) {
      displayValue = value.toString();
    } else {
      displayValue = value.toFixed(8).replace(/\.0+$|0+$/, "");
    }

    operand1 = parseFloat(displayValue);
    operator = null;
    operand2 = null;
    lastButtonType = "equals";
    expressionText = `${a} ${performedOperator} ${b}`.trim();
    if (expressionText === "") {
      expressionText = `${a}`;
    }
  }

  function getDisplay() {
    updateExpression();
    return {
      expression: expressionText || "0",
      result: displayValue,
    };
  }

  return {
    clearAll,
    inputNumber,
    inputOperator,
    compute,
    getDisplay,
  };
})();
