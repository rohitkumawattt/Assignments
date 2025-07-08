let searchElement = document.querySelector(".search input");
let weatherElement = document.querySelector(".weather");
let searchButton = document.querySelector("button");

searchButton.addEventListener("click", () => {
    const city = searchElement.value;
    getWeatherData(city);
});

searchElement.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const city = searchElement.value;
        getWeatherData(city);
    }
});

function getWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee41fbbd0e11a10602763f2699c4064a&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temperature = Math.round(data.main.temp);
                updateWeatherUI(data.name, temperature);
            } else {
                weatherElement.innerHTML = `<p>Error: ${data.message}</p>`;
            }
            weatherElement.style.display = "flex";
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
function updateWeatherUI(city, temperature) {
    weatherElement.innerHTML = `
        <h1>${city}</h1>
        <p>${temperature} °C</p>
    `;
}