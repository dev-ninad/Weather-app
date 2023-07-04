const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


// async function checkWeather(city){
//     const api_key = "4cd0eee81294c867b4bc4cfc64e998c5";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

//     const weather_data = await fetch(`${url}`).then(response => response.json());

async function checkWeather(city){
    const api_key = "915cd87c33b14d8a999163558232706";
    const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());



    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    //console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    // temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
     temperature.innerHTML = `${(weather_data.current.temp_c)}°C`;
    description.innerHTML = `${weather_data.current.condition.text}`;

    humidity.innerHTML = `${weather_data.current.humidity}%`;
    wind_speed.innerHTML = `${weather_data.current.wind_kph}Km/H`;


    switch(weather_data.current.conditon.icon){
        case 'Cloudy':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;
    }
    
    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);  //city value as parameter
});