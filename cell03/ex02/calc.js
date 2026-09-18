const left = document.getElementById("left");
const right = document.getElementById("right");
const operator = document.getElementById("operator");
const button = document.getElementById("try");

button.addEventListener("click", function () {
    let a = Number(left.value);
    let b = Number(right.value);
    let result;

    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        alert("Error :(");
        return;
    }

    if (operator.value === "addition") {
        result = a + b;
    }
    else if (operator.value === "subtraction") {
        result = a - b;
    }
    else if (operator.value === "multiplication") {
        result = a * b;
    }
    else if (operator.value === "division") {
        if (b === 0) {
            alert("It's over 9000!");
            return;
        }
        result = a / b;
    }
    else if (operator.value === "modulo") {
        if (b === 0) {
            alert("It's over 9000!");
            return;
        }
        result = a % b;
    }
    alert(result);
    console.log(result);

    setInterval(function () {
    alert("Please use me...");
}, 30000);
});