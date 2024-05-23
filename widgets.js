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

    var KClink = "https://api.open-meteo.com/v1/forecast?latitude=39.0997&longitude=-94.5786&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=auto&forecast_days=14";
    var CRlink = "https://api.open-meteo.com/v1/forecast?latitude=9.9333&longitude=-84.0833&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=auto&forecast_days=14";
    var swissLink = "https://api.open-meteo.com/v1/forecast?latitude=47.0505&longitude=8.3064&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=auto&forecast_days=14";
   
    var weathersection = document.querySelector(".weatherinfo");
    var tripName = document.querySelector(".tripName");

    weathersection.innerHTML = "";
    
    if (tripName.innerHTML === "San José, Costa Rica 🇨🇷"){
        var apilink = "https://api.open-meteo.com/v1/forecast?latitude=9.9333&longitude=-84.0833&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=auto&forecast_days=14";
    }

    else if (tripName.innerHTML === "Lucerne, Switzerland 🇨🇭"){
        var apilink = "https://api.open-meteo.com/v1/forecast?latitude=47.0505&longitude=8.3064&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=auto&forecast_days=14";
    }

    else if (tripName.innerHTML === "Kansas City, USA 🇺🇸"){
        var apilink = "https://api.open-meteo.com/v1/forecast?latitude=39.0997&longitude=-94.5786&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=auto&forecast_days=14";
    }

    var response = await fetch (apilink);
    var data = await response.json();

    var weatherCodes = [];
    var imgSrcs = [];

    for (i = 0; i < 14; i++) {

        switch (data.daily.weather_code[i]) {
            case 0:
                weatherCodes.push("Clear sky");
                imgSrcs.push("assets/sun.svg");
                break;

            case 1:
                weatherCodes.push("Mainly clear");
                imgSrcs.push("assets/sun.svg");
                break;

            case 2:
                weatherCodes.push("Partly cloudy");
                imgSrcs.push("assets/cloud.svg");
                break;

            case 3:
                weatherCodes.push("Overcast");
                imgSrcs.push("assets/cloud.svg");
                break;

            case 45:
            case 48:
                weatherCodes.push("Fog");
                imgSrcs.push("assets/cloud-fog.svg");
                break;

            case 51:
                weatherCodes.push("Light drizzle");
                imgSrcs.push("assets/cloud-drizzle.svg");
                break;

            case 53:
            case 55:
                weatherCodes.push("Drizzling");
                imgSrcs.push("assets/cloud-drizzle.svg");
                break;

            case 56:
            case 57:
                weatherCodes.push("Freezing drizzle");
                imgSrcs.push("assets/cloud-sleet.svg");
                break;
            
            case 61:
                weatherCodes.push("Light rain");
                imgSrcs.push("assets/cloud-rain.svg");
                break;

            case 63:
                weatherCodes.push("Moderate rain");
                imgSrcs.push("assets/cloud-rain.svg");
                break;

            case 65:
            case 82:
                weatherCodes.push("Heavy rain");
                imgSrcs.push("assets/cloud-rain.svg");
                break;
            
            case 66:
            case 67:
                weatherCodes.push("Freezing rain");
                imgSrcs.push("assets/cloud-sleet.svg");
                break;

            case 71:
            case 77:
                weatherCodes.push("Light snow");
                imgSrcs.push("assets/cloud-snow.svg");
                break;

            case 73:
                weatherCodes.push("Moderate snow");
                imgSrcs.push("assets/cloud-snow.svg");
                break;

            case 75:
                weatherCodes.push("Heavy snow");
                imgSrcs.push("assets/cloud-snow.svg");
                break;

            case 85:
            case 86:
                weatherCodes.push("Snow flurries");
                imgSrcs.push("assets/cloud-snow.svg");
                break;

            case 80:
                weatherCodes.push("Some rain showers");
                imgSrcs.push("assets/cloud-rain.svg");
                break;

            case 81:
                weatherCodes.push("Moderate rain showers");
                imgSrcs.push("assets/cloud-rain.svg");
                break;

            case 95:
            case 96:
            case 99:
                weatherCodes.push("Thunderstorms");
                imgSrcs.push("assets/cloud-lightning-rain.svg");
                break;
            
            default:
                console.log("There was an error with the weather API.");
        }
    }

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

function addItinerary() {
    var exampleItems = [
        `<li><span class= "itDate">Wednesday, 9/25: La Fortuna </span>
            <ul>
                <li>8:30 am: Bus departs from main station to La Fortuna</li>
                <li>1:00 pm: Arrival at La Fortuna</li>
                <li>1:30 pm: Check into Baldi Hot Springs Hotel </li>
                <li>2:00 pm: Grab lunch at local cafe</li>
                <li>3:00 pm - 6:00pm: Explore town and shop</li>
                <li>6:00 pm: Grab dinner and drinks at hotel and go relax in hot springs after dinner</li>
            </ul></li>`,
            `<li><span class="itDate">Thursday, 9/26: La Fortuna Day 2 </span>
            <ul>
                <li>9:00 am: Grab breakfast at hotel and relax in hot springs</li>
                <li>11:00 am: Arrive in lobby for volcano tour</li>
                <li>2:30 pm: Return from volcano tour and relax for rest of afternoon</li>
                <li>4:00 pm: Check out of hotel</li>
                <li>4:30 pm - 9:00pm: Bus ride back to capital</li>
                <li>9:30 pm: Uber to hotel</li>
            </ul></li>`,
            `<li><span class= "itDate">Friday, 9/27: Puntaarenas</span>
        <ul>
            <li>7:30 am: Arrive at bus station to depart for Puntarenas</li>
            <li>9:30 am: Arrive in Puntarenas and walk to beach</li>
            <li>10:00 am - 5:00 pm: Enjoy the beach! </li>
            <li>5:30 pm: Hop on bus to return to capital</li>
            <li>7:30 pm: Return to capital and Uber to hotel</li>
            <li>8:00 pm: Order dinner at hotel restaurant</li>
        </ul></li>`, 
    ]

    var itinerary = document.querySelector(".itinerary");

    
    for (var i = 0; i < exampleItems.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = exampleItems[i];
        itinerary.appendChild(newDiv);
    }
}
