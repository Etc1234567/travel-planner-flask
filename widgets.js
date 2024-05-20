function startCountdown(element) {
    var tripDate = element.value;
    var form = document.querySelector(".countDownForm");
    form.remove();

    var banner = document.querySelector(".countdown");

    banner.innerText = "Your trip is on " + element.value;
}