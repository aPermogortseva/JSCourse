(function () {
    var countries = [
        {
            name: "Россия",
            cities: [
                {
                    name: "Новосибирск",
                    population: 1511000
                },
                {
                    name: "Омск",
                    population: 1159000
                },
                {
                    name: "Красноярск",
                    population: 1007000
                }
            ]
        },
        {
            name: "Англия",
            cities: [
                {
                    name: "Ливерпуль",
                    population: 496784
                },
                {
                    name: "Манчестер",
                    population: 553230
                },
                {
                    name: "Лондон",
                    population: 8982000
                },
                {
                    name: "Бристоль",
                    population: 428234
                }
            ]
        },
        {
            name: "Италия",
            cities: [
                {
                    name: "Палермо",
                    population: 657960
                },
                {
                    name: "Милан",
                    population: 1396059
                },
                {
                    name: "Милан",
                    population: 1396059
                },
                {
                    name: "Милан",
                    population: 1396059
                }
            ]
        }
    ];

    function getMaxCitiesCountCountries(countries) {
        var maxCitiesCuntInCurrentCountry = 0;

        var maxCitiesCount = countries.reduce(function (max, currentCountry) {
            if (currentCountry.cities.length > maxCitiesCuntInCurrentCountry) {
                maxCitiesCuntInCurrentCountry = currentCountry.cities.length;
            }

            return maxCitiesCuntInCurrentCountry;
        }, 0);

        return countries
            .filter(function (country) {
                return country.cities.length === maxCitiesCount;
            });
    }

    console.log("Страны с наибольшим количеством городов: ", getMaxCitiesCountCountries(countries));

    function getTotalCountriesPopulation(countries) {
        var totalCountriesPopulation = {};

        countries.forEach(function (country) {
            var countryName = country.name;

            totalCountriesPopulation[countryName] = country.cities.reduce(function (sum, city) {
                return sum + city.population;
            }, 0);
        })

        return totalCountriesPopulation;
    }

    console.log("Суммарная численность населения по странам: ", getTotalCountriesPopulation(countries));
})();