function startCountdown(element) {
    var tripDate = Date.parse(element.value);
    var form = document.querySelector(".countDownForm");
    form.remove();
    
    var timer = setInterval(function() {
        var now = new Date().getTime();
        var timeRemaining = tripDate - now;

        var days = Math.floor(timeRemaining/ (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
        var banner = document.querySelector(".countdown");
    
        banner.innerHTML = `<h1> Your trip is in:
                             ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds. </h1>`
        
        if (timeRemaining < 0) {
            clearInterval(timer);
            banner.innerHTML = "<h1> Trip time! 🎉 </h1>";
        }
    }, 1000);

}

async function fetchWeather() {

    var response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=9.9333&longitude=-84.0833&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=auto&forecast_days=14");
    var data = await response.json();

    var weatherCodes = [];
    var imgSrcs = [];

    for (i = 0; i < 14; i++) {

        if (data.daily.weather_code[i] === 0) {
            weatherCodes.push("Clear sky");
            imgSrcs.push("assets/sun.svg");
        }
        if (data.daily.weather_code[i] === 1 || data.daily.weather_code[i] === 2 || data.daily.weather_code[i] === 3) {
            weatherCodes.push("Some clouds");
            imgSrcs.push("assets/cloud.svg");
        }
        if (data.daily.weather_code[i] === 45 || data.daily.weather_code[i] === 48) {
            weatherCodes.push("Fog");
            imgSrcs.push("assets/cloud-fog.svg");
        }
        if (data.daily.weather_code[i] === 51 || data.daily.weather_code[i] === 53 || data.daily.weather_code[i] === 55) {
            weatherCodes.push("Drizzling");
            imgSrcs.push("assets/cloud-drizzle.svg");
        }
        if (data.daily.weather_code[i] === 56 || data.daily.weather_code[i] === 57) {
            weatherCodes.push("Freezing drizzle");
            imgSrcs.push("assets/cloud-sleet.svg");
        }
        if (data.daily.weather_code[i] === 61 || data.daily.weather_code[i] === 63 || data.daily.weather_code[i] === 65) {
            weatherCodes.push("Rain");
            imgSrcs.push("assets/cloud-rain.svg");
        }
        if (data.daily.weather_code[i] === 66 || data.daily.weather_code[i] === 67) {
            weatherCodes.push("Freezing rain");
            imgSrcs.push("assets/cloud-sleet.svg");
        }
        if (data.daily.weather_code[i] === 71 || data.daily.weather_code[i] === 73 || data.daily.weather_code[i] === 75 || data.daily.weather_code[i] === 77 || data.daily.weather_code[i] === 85 || data.daily.weather_code[i] === 86) {
            weatherCodes.push("Snow");
            imgSrcs.push("assets/cloud-snow.svg");
        }
        if (data.daily.weather_code[i] === 80 || data.daily.weather_code[i] === 81 || data.daily.weather_code[i] === 82) {
            weatherCodes.push("Rain showers");
            imgSrcs.push("assets/cloud-rain.svg");
        }
        if (data.daily.weather_code[i] === 95 || data.daily.weather_code[i] === 96 || data.daily.weather_code[i] === 99) {
            weatherCodes.push("Thunderstorms");
            imgSrcs.push("assets/cloud-lightning-rain.svg");
        }
    }

    var weathersection = document.querySelector(".weather");

    for (var i = 0; i < 14; i++) {
        var newDiv = document.createElement("div");

        newDiv.innerHTML = `
            <p> ${data.daily.time[i]} </p>
            <img src=${imgSrcs[i]} alt="day 1 weather icon">
            <div>
                <p>${weatherCodes[i]}</p>
                High ${Math.round(data.daily.temperature_2m_max[i])}°F, Low ${Math.round(data.daily.temperature_2m_min[i])}°F</p>
            </div>`

        newDiv.classList.add("flex");
        newDiv.classList.add("weatheritems");

        weathersection.appendChild(newDiv);
    }
}

function highlight(element) {
    element.classList.add("highlight");
}

function removeHighlight(element) {
    element.classList.remove("highlight");
}