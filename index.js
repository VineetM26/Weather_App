const apiKey = "66e7f63d533e363ad7c38c2cfa6d2d57";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wetherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        wetherIcon.src= "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        wetherIcon.src= "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        wetherIcon.src= "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        wetherIcon.src= "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        wetherIcon.src= "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})