document.addEventListener("DOMContentLoaded", function () {
    var inputValue = document.getElementById("celsius-temperature-input");
    var dotCount = 0;

    inputValue.addEventListener("keydown", function (e) {
        checkInput(e);

        if (inputValue.value.length === 1) {
            checkFirstSymbolForDot();
        }

        checkExtraHyphens(e);

        checkExtraDots(e);

        updateDotCount(e);
    });

    function updateDotCount(e) {
        var lastSymbol = inputValue.value.charAt(inputValue.value.length - 1);

        if (e.key === 'Backspace' && lastSymbol === '.') {
            dotCount--;
        }
    }

    function checkInput(e) {
        if ((e.key < '0' || e.key > '9') && e.key !== '-' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' &&
            e.key !== 'Delete' && e.key !== 'Backspace' && e.key !== '.' && e.key &&
            !(e.ctrlKey && e.code === 'KeyV') && !(e.ctrlKey && e.code === 'KeyX') &&
            !(e.ctrlKey && e.code === 'KeyC')) {
            e.preventDefault();
        }
    }

    function checkExtraHyphens(e) {
        if (e.key === '-' && inputValue.value.length >= 1) {
            e.preventDefault();
        }
    }

    function checkExtraDots(e) {
        if (e.key === '.') {
            if (dotCount > 0) {
                e.preventDefault();
            } else {
                dotCount++;
            }
        }
    }

    function checkFirstSymbolForDot() {
        if (inputValue.value.charAt(0) === '.') {
            dotCount++;
            return inputValue.value = '0' + inputValue.value;
        }

        return inputValue.value;
    }

    function checkIsEmpty(value) {
        return value.length === 0;
    }

    function trimDotAndHyphen(value) {
        if (checkIsEmpty(value) === false) {
            var lastSymbol = value.charAt(value.length - 1);

            if (lastSymbol === '-') {
                return value.slice(0, -1);
            }

            if (lastSymbol === '.') {
                dotCount--;

                return value.slice(0, -1);
            }
        }

        return value;
    }

    function convert() {
        var convertButton = document.getElementById("convert-button");

        convertButton.addEventListener("click", function () {
            inputValue.value = trimDotAndHyphen(inputValue.value);

            inputValue.parentElement.classList.remove("invalid");

            if (checkIsEmpty(inputValue.value)) {
                inputValue.parentElement.classList.add("invalid");
                return;
            }

            if (isNaN(inputValue.value)) {
                inputValue.parentElement.classList.add("invalid");
                return;
            }

            var celsiusValue = inputValue.value;

            document.getElementById("kelvin-temperature").value = (parseInt(celsiusValue, 10) + 273.15).toFixed(2);

            document.getElementById("fahrenheit-temperature").value = ((parseInt(celsiusValue, 10) * 1.8) + 32).toFixed(2);
        })
    }

    convert();
});