var Twitter = require('twitter');
var cron = require('node-cron');
var $;
require("jsdom").env("", function (err, window) {
    if (err) {
        console.error(err);
        return;
    }
    $ = require("jquery")(window);
});
var client = new Twitter({
    consumer_key: '7VkHVDx8UYDoIfvWCs6HX7LVV'
    , consumer_secret: 'y0GwKfrlVs1vdEz622phGUlq9seN2MFJx9A2Y0pFru5acydlHa'
    , access_token_key: '805607249729253376-8YJiFwyZj7DgrpK22g8cX8ChZGMoHu3'
    , access_token_secret: 'fn9o9iLT7hNKyJKBO3rOsYIXdRieo5y4a35tEAUCtn8eo'
});
var params = {
    screen_name: 'nodejs'
};
// Makes call to the following URL:
//http://api.worldweatheronline.com/premium/v1/weather.ashx?format=json&key=87644bbf13a0453088131013160512&q=14623
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
var task = cron.schedule('00 00 */2 * * *', function () {
//var task = cron.schedule('* * * * * *', function () {
    weather.getWeather();
}, false);



module.exports = {
    get_timeline: function (req, res) {
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                console.log(tweets);
            }
        });
    }
    , post_tweet: function (req, res) {}
    , run_cron: function (req, res) {
        console.log("in run cron");
        task.start();
    }
};