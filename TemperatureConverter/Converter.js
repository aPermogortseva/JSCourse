function checkInput(key) {
    return (key >= '0' && key <= '9') || key === '-' || key === 'ArrowLeft' || key === 'ArrowRight' ||
        key === 'Delete' || key === 'Backspace' || key === '.';
}

function checkFirstSymbol(value) {
    if (value.charAt(0) === '.') {
        return '0' + value;
    } else {
        return value;
    }
}

function convert() {
    var convertButton = document.getElementById("convert-button");

    convertButton.addEventListener("click", function () {
        var inputValue = document.getElementById("celsius-temperature-input");
        var celsiusValue = inputValue.value;

        celsiusValue = checkFirstSymbol(celsiusValue);
        inputValue.value = celsiusValue;

        document.getElementById("kelvin-temperature").value = parseInt(celsiusValue, 10) + 273.15;

        document.getElementById("fahrenheit-temperature").value = (parseInt(celsiusValue, 10) * 1.8) + 32;
    })
}

convert();


