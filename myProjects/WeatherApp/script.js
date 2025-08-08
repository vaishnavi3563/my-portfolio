const API_KEY = "914e9aa714054a6593b1f40472188ef2";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherType = data.weather[0].main;
        console.log("Weather type:", weatherType);
        
        if (weatherType === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (weatherType === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (weatherType === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (weatherType === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (weatherType === "Mist") {
            weatherIcon.src = "images/mist.png";
        } else {
            weatherIcon.src = "images/default.png";
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    
        }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})