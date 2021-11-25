(function () {
    var numbers = [3, 5, 2, 1, 4, 8, 2, 7, 0];
    console.log("Массив чисел: [" + numbers + "]");

    numbers.sort(function (number1, number2) {
        return number2 - number1;
    });

    console.log("Массив чисел в убывающем порядке: [" + numbers + "]");

    var firstFiveNumbers = numbers.slice(0, 5);
    console.log("Подмассив из первых пяти чисел: [" + firstFiveNumbers + "]");

    var lastFiveNumbers = numbers.slice(numbers.length - 5, numbers.length);
    console.log("Подмассив из последних пяти чисел: [" + lastFiveNumbers + "]");

    var evenNumbersSum = numbers.reduce(function (sum, current) {
        return sum + (current % 2 === 0 ? current : 0);
    }, 0);

    console.log("Сумма чётных чисел в массиве = " + evenNumbersSum);

    var numbers2 = [];

    for (var i = 1; i <= 100; i++) {
        numbers2.push(i);
    }

    var evenNumbersSquares = numbers2.filter(function (current) {
        return current % 2 === 0
    })
        .map(function (current) {
            return Math.pow(current, 2)
        });

    console.log("Список квадратов чётных чисел: " + evenNumbersSquares);
})();