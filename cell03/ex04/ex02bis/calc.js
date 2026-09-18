$(document).ready(function () {
    $("#try").click(function () {
        let a = Number($("#left").val());
        let b = Number($("#right").val());
        let result;

        if (!Number.isInteger(a) ||
            !Number.isInteger(b) ||
            a < 0 ||
            b < 0) {
            alert("Error :(");
            return;
        }

        if ($("#operator").val() === "addition") {
            result = a + b;
        }
        else if ($("#operator").val() === "subtraction") {
            result = a - b;
        }
        else if ($("#operator").val() === "multiplication") {
            result = a * b;
        }
        else if ($("#operator").val() === "division") {
            if (b === 0) {
                alert("It's over 9000!");
                return;
            }
            result = a / b;

        }
        else if ($("#operator").val() === "modulo") {
            if (b === 0) {
                alert("It's over 9000!");
                return;
            }
            result = a % b;
        }
        alert(result);
        console.log(result);
    });


    setInterval(function () {
        alert("Please use me...");
    }, 30000);
});