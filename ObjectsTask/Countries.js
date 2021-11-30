(function () {
    var countries = [];

    countries[0] = {
        name: "Россия",
        cities: []
    }

    countries[0].cities[0] = {
        name: "Новосибирск",
        population: 1511000
    }

    countries[0].cities[1] = {
        name: "Омск",
        population: 1159000
    }

    countries[0].cities[2] = {
        name: "Красноярск",
        population: 1007000
    }

    countries[1] = {
        name: "Англия",
        cities: []
    }

    countries[1].cities[0] = {
        name: "Ливерпуль",
        population: 496784
    }

    countries[1].cities[1] = {
        name: "Манчестер",
        population: 553230
    }

    countries[1].cities[2] = {
        name: "Лондон",
        population: 8982000
    }

    countries[1].cities[3] = {
        name: "Бристоль",
        population: 428234
    }

    countries[2] = {
        name: "Италия",
        cities: []
    }

    countries[2].cities[0] = {
        name: "Палермо",
        population: 657960
    }

    countries[2].cities[1] = {
        name: "Милан",
        population: 1396059
    }

    var maxCitiesCount = 0;

    countries.forEach(country => {
        if (country.cities.length >= maxCitiesCount) {
            maxCitiesCount = country.cities.length;
        }
    })

    console.log(maxCitiesCount);

    var maxCitiesCountCountries = countries
        .filter(function (country) {
            return country.cities.length === maxCitiesCount;
        })
        .map(function (country) {
            return country.name;
        });

    console.log("Страны с наибольшим количеством городов: " + maxCitiesCountCountries);

    var totalCountriesPopulation = countries
        .map(function (country) {
            return country = {
                [country.name]: country.cities.reduce(function (sum, city) {
                    return sum + city.population;
                }, 0)
            }
        });

    console.log("Суммарная численность населения по странам: ", totalCountriesPopulation);
})();