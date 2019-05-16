function doCalculation(operatorType) {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    result = document.getElementById("result");
    result.innerText = eval(number1 + operatorType + number2);
}
plusButton.addEventListener("click", function(){doCalculation(" + ")}, false);
minusButton.addEventListener("click", function(){doCalculation(" - ")}, false);
mulButton.addEventListener("click", function(){doCalculation(" * ")}, false);
divButton.addEventListener("click", function(){doCalculation(" / ")}, false);

