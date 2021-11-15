// 65987726ba76fab91430d2328d0bb75a secret key
//https://openweathermap.org/api
//Using the Open Weather API create a weather 
//application that displays the High, Low, Forecast and Humidity using JavaScript.
// look for temp max for kelvin to far

function getJson() {
    let city = document.querySelector('#city').value;
    let zipcode = document.querySelector('#zipcode').value;
    
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zipcode}&appid=65987726ba76fab91430d2328d0bb75a&units=imperial`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let city_display = document.getElementById('cityOutput')
        city_display.innerHTML = city

        let zipcode_display = document.getElementById('zipcodeOutput')
        zipcode_display.innerHTML = zipcode

        let high = data.main.temp_max
        let high_display = document.getElementById('high')
        high_display.innerHTML = high


        let low = data.main.temp_min
        let low_display = document.getElementById('low')
        low_display.innerHTML = low

    
        let forecast = data.weather[0].main
        let forecast_display = document.getElementById('forecast')
        forecast_display.innerHTML = forecast


        let humidity = data.main.humidity
        let humidity_display = document.getElementById('humidity')
        humidity_display.innerHTML = humidity 
       
        }
    )

}
