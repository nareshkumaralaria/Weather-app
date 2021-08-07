// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// f3dffead40b407614c38a50a6976678f

const weatherApi = {
    key: "f3dffead40b407614c38a50a6976678f",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather?"
}

const searchInputBox = document.querySelector('.input-box');

// anyo. function

searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-details').style.display = "block";
    }
});

// fetch weather report

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    })
    .then(showWeatherReport);
}

// show weather report

function showWeatherReport(weather){
    let currentTemp = document.querySelector('.current-temp');
    currentTemp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    let maxTemp = document.querySelector('.max');
    maxTemp.innerHTML = `Max: ${Math.ceil(weather.main.temp_max)}&deg;C`

    let minTemp = document.querySelector('.min');
    minTemp.innerHTML = `Min: ${Math.floor(weather.main.temp_min)}&deg;C`

    let weatherCondition = document.querySelector('.weather-condition');
    weatherCondition.innerHTML = `${weather.weather[0].main}`

    let date = document.querySelector('.date');
    let todayDate = new Date();
    date.innerHTML = dateManage(todayDate);

    let time = document.querySelector('.time');
    time.innerHTML = timeManage(todayDate);

    let weatherImg = document.querySelector('.weather-img-details');

    if (weatherCondition.textContent == 'Thunderstorm') {
        weatherImg.src = "./3d weather icons/cloud/17.png";
    } else if (weatherCondition.textContent == 'Drizzle') {
        weatherImg.src = "./3d weather icons/cloud/5.png";
    } else if (weatherCondition.textContent == 'Rain') {
        weatherImg.src = "./3d weather icons/rain/39.png";
    } else if (weatherCondition.textContent == 'Mist') {
        weatherImg.src = "./3d weather icons/cloud/35.png";
    } else if (weatherCondition.textContent == 'Haze') {
        weatherImg.src = "./3d weather icons/cloud/35.png";
    } else if (weatherCondition.textContent == 'Clear') {
        weatherImg.src = "./3d weather icons/cloud/35.png";
    } else if (weatherCondition.textContent == 'Clouds') {
        weatherImg.src = "./3d weather icons/cloud/35.png";
    } else if (weatherCondition.textContent == 'Smoke') {
        weatherImg.src = "./3d weather icons/cloud/35.png";
    } else if (weatherCondition.textContent == 'Dust') {
        weatherImg.src = "./3d weather icons/cloud/35.png";
    } else if (weatherCondition.textContent == 'Fog') {
        weatherImg.src = "./3d weather icons/cloud/35.png";
    } else if (weatherCondition.textContent == 'Sand') {
        weatherImg.src = "./3d weather icons/cloud/35.png";
    } else if (weatherCondition.textContent == 'Ash') {
        weatherImg.src = "./3d weather icons/cloud/35.png";
    } else if (weatherCondition.textContent == 'Squall') {
        weatherImg.src = "./3d weather icons/cloud/35.png";
    } else if (weatherCondition.textContent == 'Tornado') {
        weatherImg.src = "./3d weather icons/cloud/35.png";
    }
}
// date time

function dateManage(dateArg){

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let day = dateArg.getDay() + 1;

    return `${month} ${day}, ${year}`;
}
function timeManage(dateArg){

    let hour = dateArg.getHours();
    let minute = dateArg.getMinutes();

    return `${hour}:${minute} (IST)`;
}