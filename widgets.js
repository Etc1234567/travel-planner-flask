function startCountdown(element) {
    var tripDate = element.value;
    var form = document.querySelector(".countDownForm");
    form.remove();

    var banner = document.querySelector(".countdown");

    banner.innerText = "Your trip is on " + element.value;
}

async function fetchWeather() {

    //TO-DO: Add functionality for other cities?

    // get API data
    var response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=9.9333&longitude=-84.0833&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=auto&forecast_days=14");
    var data = await response.json();

    // put on page
    console.log(data);

    var weatherCodes = [];
    var imgSrcs = [];

    for (i = 0; i < 10; i++) {

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

        console.log(weatherCodes);
    }

    // using template literal to insert data from API
    //for image, can insert <img src="${and insert API source here}">
    var weathersection = document.querySelector(".weather");

    weathersection.innerHTML = `
        <h2> 10 Day Weather in San Jose, CR </h2>
            <div class="flex weatheritems">
                <p> ${data.daily.time[0]} </p>
                <img src=${imgSrcs[0]} alt="day 1 weather icon">
                <div>
                    <p>${weatherCodes[0]}</p>
                    High ${data.daily.temperature_2m_max[0]}°F, Low ${data.daily.temperature_2m_min[0]}°F</p>
                </div>
            </div>
            <div class="flex weatheritems">
                <p> ${data.daily.time[1]} </p>
                <img src=${imgSrcs[1]} alt="day 2 weather icon">
                <div>
                    <p>${weatherCodes[1]}</p>
                    High ${data.daily.temperature_2m_max[1]}°F, Low ${data.daily.temperature_2m_min[1]}°F</p>
                </div>
            </div>
            <div class="flex weatheritems">
                <p> ${data.daily.time[2]} </p>
                <img src=${imgSrcs[2]} alt="day 3 weather icon">
                <div>
                    <p>${weatherCodes[2]}</p>
                    High ${data.daily.temperature_2m_max[2]}°F, Low ${data.daily.temperature_2m_min[2]}°F</p>
                </div>
            </div>
            <div class="flex weatheritems">
                <p> ${data.daily.time[3]} </p>
                <img src=${imgSrcs[3]} alt="day 4 weather icon">
                <div>
                    <p>${weatherCodes[3]}</p>
                    High ${data.daily.temperature_2m_max[3]}°F, Low ${data.daily.temperature_2m_min[3]}°F</p>
                </div>
            </div>
            <div class="flex weatheritems">
                <p> ${data.daily.time[4]} </p>
                <img src=${imgSrcs[4]} alt="day 5 weather icon">
                <div>
                    <p>${weatherCodes[4]}</p>
                    High ${data.daily.temperature_2m_max[4]}°F, Low ${data.daily.temperature_2m_min[4]}°F</p>
                </div>   
            </div>
            <div class="flex weatheritems">
                <p> ${data.daily.time[5]} </p>
                <img src=${imgSrcs[5]} alt="day 6 weather icon">
                <div>
                    <p>${weatherCodes[5]}</p>
                    High ${data.daily.temperature_2m_max[5]}°F, Low ${data.daily.temperature_2m_min[5]}°F</p>
                </div>
            </div>
            <div class="flex weatheritems">
                <p> ${data.daily.time[6]} </p>
                <img src=${imgSrcs[6]} alt="day 7 weather icon">
                <div>
                    <p>${weatherCodes[6]}</p>
                    High ${data.daily.temperature_2m_max[6]}°F, Low ${data.daily.temperature_2m_min[6]}°F</p>
                </div>
            </div>
            <div class="flex weatheritems">
                <p> ${data.daily.time[7]} </p>
                <img src=${imgSrcs[7]} alt="day 8 weather icon">
                <div>
                    <p>${weatherCodes[7]}</p>
                    High ${data.daily.temperature_2m_max[7]}°F, Low ${data.daily.temperature_2m_min[7]}°F</p>
                </div>
            </div>
            <div class="flex weatheritems">
                <p> ${data.daily.time[8]} </p>
                <img src=${imgSrcs[8]} alt="day 9 weather icon">
                <div>
                    <p>${weatherCodes[8]}</p>
                    High ${data.daily.temperature_2m_max[8]}°F, Low ${data.daily.temperature_2m_min[8]}°F</p>
                </div>
            </div>
            <div class="flex weatheritems">
                <p> ${data.daily.time[9]} </p>
                <img src=${imgSrcs[9]} alt="day 10 weather icon">
                <div>
                    <p>${weatherCodes[9]}</p>
                    High ${data.daily.temperature_2m_max[9]}°F, Low ${data.daily.temperature_2m_min[9]}°F</p>
                </div>
            </div>
    `
}

function highlight(element) {

}