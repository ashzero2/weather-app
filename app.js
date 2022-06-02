var key = '74ef700817a705c2c21f1e5df8e86f00';

function showDetails(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    document.querySelector(".temp").innerHTML = "Celcius : " + celcius;
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

}

function getWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key)
        .then((resp) => {
            return resp.json()
        })
        .then((data) => {
            showDetails(data);
        })
        .catch(() => {
            alert("Sorry Sir")
        });
}

document.querySelector(".submit").addEventListener("click", () => {
    const val = document.querySelector(".city").value;
    if (val === '') {
        alert("Enter a city name to continue");
    }
    else {
        document.querySelector(".cityName").innerHTML = "City Name : " + val;
        getWeather(val);
    }
});