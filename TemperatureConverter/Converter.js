document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("celsius-temperature-input");

    input.addEventListener("keydown", function (e) {
        if (input.value.length === 1) {
            checkFirstSymbolForDot();
        }
    });

    function checkFirstSymbolForDot() {
        if (input.value.charAt(0) === ".") {
            return input.value = "0" + input.value;
        }

        return input.value;
    }

    function checkIsEmpty(string) {
        return string.length === 0;
    }

    function convert() {
        var convertButton = document.getElementById("convert-button");

        convertButton.addEventListener("click", function () {
            input.value = input.value.replace("е", "e");
            input.value = input.value.replace(",", ".");

            input.parentElement.classList.remove("invalid");

            if (checkIsEmpty(input.value)) {
                input.parentElement.classList.add("invalid");
                return;
            }

            if (isNaN(input.value)) {
                input.parentElement.classList.add("invalid");
                return;
            }

            var celsiusTemperature = parseFloat(input.value);

            document.getElementById("kelvin-temperature").value = (celsiusTemperature + 273.15).toFixed(2);

            document.getElementById("fahrenheit-temperature").value = ((celsiusTemperature * 1.8) + 32).toFixed(2);
        });
    }

    convert();
});