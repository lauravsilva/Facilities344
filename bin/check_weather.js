#! /app/bin/node

var weather = {
    WEATHER_JSON_URL: "http://api.worldweatheronline.com/premium/v1/weather.ashx?format=json&key="
    , WEATHER_API_KEY: "87644bbf13a0453088131013160512"
        //make call to weather api and parse json
        
    , getWeather: function () {
        var urlWeather = weather.WEATHER_JSON_URL + weather.WEATHER_API_KEY + "&q=14623";
        $.getJSON(urlWeather).done(function (data) {
            weather.displayWeatherResults(data);
        });
        console.log("in get weather");
    }, //display results from weather api call
    displayWeatherResults: function (obj) {
        if (obj.data.error) {
            return; // bail out
        }
        // get today's weather
        var allDataCurrent = obj.data.current_condition[0];
        var time = allDataCurrent.observation_time;
        var tempF = allDataCurrent.temp_F;
        var feelsLikeF = allDataCurrent.FeelsLikeF;
        var weatherDescription = allDataCurrent.weatherDesc[0].value;
        console.log("in display weather results");
        weather.decision(time, tempF, feelsLikeF, weatherDescription);
    }, //depending on weather, print different statements 
    decision: function (time, tempF, feelsLikeF, weatherDescription) {
        var textToTweet = "";
        console.log(tempF, feelsLikeF);
        if (tempF < 80) {
            textToTweet += "Current Weather" + " (" + time + "): " + tempF + "F, " + weatherDescription + ". Feels like: " + feelsLikeF + "F.";
            console.log(textToTweet);
            client.post('statuses/update', {
                status: textToTweet
            }, function (error, tweet, response) {
                //                    if (error) throw error;
                //                    console.log(tweet); // Tweet body. 
                console.log(response); // Raw response object. 
            });
        }
    }
}

function checkWeather() {
    console.log('Hello');
    weather.getWeather();
}
checkWeather();
process.exit();