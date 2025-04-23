const cityName = document.querySelector('[data-js-city-name]')
const temperature = document.querySelector('[data-js-temperature]')
const windSpeed = document.querySelector('[data-js-wind-speed]')

const forecastTemperature = document.querySelectorAll('[data-js-forecast-temperature]')


function current_weather(latitudeValue, longitudeValue) {

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitudeValue}&longitude=${longitudeValue}&current_weather=true&hourly=temperature_2m,rain,cloud_cover`
    fetch(url)
    .then(res => res.json())
    .then(currentWeather => {
        const currentTemperature = Math.round(currentWeather.current_weather.temperature)
        const timeOfDay = currentWeather.current_weather.is_day == 1 ? 'day' : 'night'

        temperature.textContent = `${currentTemperature} °С`
        windSpeed.textContent = `Wind speed ${currentWeather.current_weather.windspeed} km/h`
    })
    .catch(error => {
        console.log('Ошибка:', error);
    });
}

function weather_forecast(latitudeValue, longitudeValue) {

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitudeValue}&longitude=${longitudeValue}&past_days=0&daily=temperature_2m_max`;

    fetch(url)
    .then(res => res.json())
    .then(weatherForecast => {

        const currentDate = new Date().toISOString().split('T')[0]
        const weatherForecast_index = weatherForecast.daily.time.findIndex(t => t.includes(currentDate))

        for (let i = 0; i < forecastTemperature.length; i++) {
            forecastTemperature[i].textContent = `${weatherForecast.daily.temperature_2m_max[i+1]} °С`
        }

    })
    .catch(error => {
        console.log('Ошибка:', error);
    });
}

// geoposition
fetch("https://api.ipdata.co?api-key=131fb8aeea81b23e4aee635204c38446c01651c978dc0d838dab30dd")
    .then(res => res.json())
    .then(data => {

        const latitude = data.latitude
        const longitude = data.longitude

        // textContent - city 
        cityName.textContent = `${data.city}`

        
           
        if (latitude && longitude) {

            Promise.all([
                current_weather(latitude, longitude),
                weather_forecast(latitude, longitude)
            ])
            .then(() => {             
                // visible element
            })


        } else {
            return false
        }

    }  )
    
    .catch(error => {
        console.log('Ошибка:', error);
    });



function visibleWeather(paramObject) {
    
}