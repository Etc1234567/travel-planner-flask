function startCountdown() {
    // Pull vacation data from api first
    fetch('http://localhost:8000/api/vacations/')
        .then( response => response.json() )
        .then( data => console.log(data) )

    var tripDate = ${data.date}
    var form = document.querySelector(".countDownForm");
    form.remove();

    // var tripDate = Date.parse("{{this_vacation.date}}")
    // console.log(tripDate);
    
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