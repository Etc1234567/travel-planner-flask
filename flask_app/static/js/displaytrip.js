function displayTrip(element) {
    var crTab = document.querySelector("#cr");
    var swissTab = document.querySelector("#switzerland");
    var tripName = document.querySelector(".tripName");
    var KCtab = document.querySelector("#kc");
    var weatherHead = document.querySelector("#weatherHead");
    var notes = document.querySelector(".noteContent");
    var itinerary = document.querySelector(".itinerary");

    if (element.id === "kc") {
        swissTab.classList.remove("hidden");
        crTab.classList.remove("hidden");
        element.classList.add("hidden");

        tripName.innerHTML = ("Kansas City, USA 🇺🇸");
        weatherHead.innerHTML = "14 Day Forecast in Kansas City, USA";
        fetchWeather();
        populateVideos();
        notes.innerHTML = `<ul><li>Nothing here yet!</li></ul>`;
        itinerary.classList.add("hidden");
    }
    else if (element.id === "switzerland") {
        KCtab.classList.remove("hidden");
        crTab.classList.remove("hidden");
        element.classList.add("hidden");

        tripName.innerHTML = ("Lucerne, Switzerland 🇨🇭");

        weatherHead.innerHTML = "14 Day Forecast in Lucerne, Switzerland";
        fetchWeather();
        populateVideos();
        notes.innerHTML = `<ul><li>Nothing here yet!</li></ul>`;
        itinerary.classList.add("hidden");
    }

    else if (element.id === "cr") {
        KCtab.classList.remove("hidden");
        swissTab.classList.remove("hidden");
        element.classList.add("hidden");

        tripName.innerHTML = ("San José, Costa Rica 🇨🇷");
        weatherHead.innerHTML = "14 Day Forecast in San José, CR";
        fetchWeather();
        populateVideos();
        notes.innerHTML = `
        <ul>
        <li>Resources
            <ul>
                <li>Hotels
                    <ul>
                        <li><a href="https://www.baldihotsprings.cr/?gad_source=1&gclid=CjwKCAjwr7ayBhAPEiwA6EIGxBsfda0sdYBqvX6YkO5r2fOqkzr0R3fsDSTRtlp9Tm27zNf-M9qWPBoC0DUQAvD_BwE" target="_blank">Baldi Hot Springs Site</a></li>
                        <li><a href="https://hoteldontaco.com/" target="_blank">Don Taco Hotel</a></li>
                        <li><a href="https://www.selina.com/costa-rica/" target="_blank">Selina Hostels</a></li>
                        <li><a href="https://tropicalstudies.org/portfolio/la-selva-research-station/" target="_blank">La Selva Biological Station</a></li>
                    </ul></li>
                    <li>Travel Guides and Resources
                        <ul>
                            <li><a href="https://www.visitcostarica.com/en/costa-rica/things-to-do" target="_blank">Visit Costa Rica</a></li>
                            <li><a href="https://explorerspassage.com/chronicles/costa-rica-travel/" target="_blank">Ultimate Travel Guide</a></li>
                            <li><a href="https://www.audleytravel.com/us/costa-rica/best-time-to-visit#may-jun" target="_blank">Climate Guide</a></li>
                        </ul></li>
                        <li>Restaurants to Try
                            <ul>
                                <li>Little Tina Coffee Shop</li>
                                <li>La Panaderia (Calle 8)</li>
                                <li>Soda del Barrio</li>
                                <li>Le Petite France</li>
                            </ul></li>
                        </ul>
                    </li>
                </ul>`;
        itinerary.classList.remove("hidden");
    }
}

function populateVideos() {
    var tripName = document.querySelector(".tripName");
    var videoSection = document.querySelector(".tripInspiration");

    var kcVideoSection =
        `<div id="inspirationCarousel" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GDu_yHpL_q0?si=vQkWtVstFhpSky3d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="carousel-item">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PjlbqPFYqes?si=wNmYpbCiSOC1KX1u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="carousel-item">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XE3ejsn_zVw?si=kBvoICW1BJrexskf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div class="carousel-item">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kzn7aBvKZqk?si=Ran2vQylRG5kUpm6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="carousel-indicators">
                <button type="button" class="active" data-bs-target="#inspirationCarousel"
                    data-bs-slide-to="0"></button>
                <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="3"></button>
            </div>
        </div>`;

    var crVideoSection =
    `<div id="inspirationCarousel" class="carousel slide">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/S0mhveUZ1ZU?si=lc7OvZB3tt8ZVhc8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="carousel-item">
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/h9k9ngY-tNI?si=A2uaER9oQ2Q5Gk13"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="carousel-item">
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/ZvdacwdQI7k?si=Em7Fiu5C0S_5G_g-"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="carousel-item">
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/tw26GEi5VM8?si=Tf79JmDLivHU_7XM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="carousel-item">
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/XMGf9qtD3lI?si=2Urs_B819Vj6upOg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="carousel-item">
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/SIqrD_brIVQ?si=qIbkj6pUzf3ixtyq"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="carousel-item">
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/cwmR6F5gfJg?si=yNvcyCNbcM1WcxwF"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>

    <div class="carousel-indicators">
        <button type="button" class="active" data-bs-target="#inspirationCarousel"
            data-bs-slide-to="0"></button>
        <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="4"></button>
        <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="5"></button>
        <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="6"></button>
    </div>
</div>`;

    var swissVideos =
        `<div id="inspirationCarousel" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/c298wtMmBOo?si=ikLl_GvWuSnAia2r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="carousel-item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/INc-igq1-nc?si=b55SVGZoceZE4M_z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>

        <div class="carousel-indicators">
            <button type="button" class="active" data-bs-target="#inspirationCarousel"
                data-bs-slide-to="0"></button>
            <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="1"></button>
        </div>
    </div>`;

    if (tripName.innerHTML === "Kansas City, USA 🇺🇸") {
        videoSection.innerHTML = kcVideoSection;
    }
    else if (tripName.innerHTML === "San José, Costa Rica 🇨🇷") {
        videoSection.innerHTML = crVideoSection;
    }
    else if (tripName.innerHTML === "Lucerne, Switzerland 🇨🇭") {
        videoSection.innerHTML = swissVideos;
    }
}
