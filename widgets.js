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
    var locationKeyCR = 115295;
    var response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/10day/${locationKeyCR}`);
    var data = await response.json();

    // put on page
    var weathersection = document.querySelector(".weather");


    // using template literal to insert data from API
    //for image, can insert <img src="${and insert API source here}">
    //San Jose Location Key is 115295
    weathersection.innerHTML = `
        <h2> 10 Day Weather in San Jose, CR </h2>
            <div class="flex">
                <p> ${data.DailyForecasts.Date} <p>
                <img src="assets/some_rain.png">
                <img src="${data.DailyForecasts.Day.Icon}" 
                <p>Some rain, Low ${data.DailyForecasts.Temperature.Minimum.Value}/High ${data.DailyForecasts.Temperature.Maximum.Value}</p>
            </div>
            <div class="flex">
                <img src="assets/some_rain.png">
                <p>Some rain</p>
            </div>
            <div class="flex">
                <img src="assets/some_rain.png">
                <p>Some rain</p>
            </div>
            <div class="flex">
                <img src="assets/some_rain.png">
                <p>Some rain</p>
            </div>
            <div class="flex">
                <img src="assets/some_rain.png">
                <p>Some rain</p>
            </div>
            <div class="flex">
                <img src="assets/some_rain.png">
                <p>Some rain</p>
            </div>
            <div class="flex">
                <img src="assets/some_rain.png">
                <p>Some rain</p>
            </div>
            <div class="flex">
                <img src="assets/some_rain.png">
                <p>Some rain</p>
            </div>
            <div class="flex">
                <img src="assets/some_rain.png">
                <p>Some rain</p>
            </div>
            <div class="flex">
                <img src="assets/some_rain.png">
                <p>Some rain</p>
            </div>
    `
}

function highlight(element) {
    
}