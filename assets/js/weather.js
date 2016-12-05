// Makes call to the following URL:
//http://api.worldweatheronline.com/premium/v1/weather.ashx?format=json&key=87644bbf13a0453088131013160512&q=14623
window.weather = {
    WEATHER_JSON_URL: "http://api.worldweatheronline.com/premium/v1/weather.ashx?format=json&key="
    , WEATHER_API_KEY: "87644bbf13a0453088131013160512"
        //make call to weather api and parse json
        
    , getWeather: function () {
        var urlWeather = weather.WEATHER_JSON_URL + weather.WEATHER_API_KEY + "&q=14623";
        // call the web service, and download the file
        $("#decisionContent").fadeOut(250);
        $("#displayOptions").fadeOut(250);
        $.getJSON(urlWeather).done(function (data) {
            weather.displayWeatherResults(data);
        });
    }, //display results from weather api call
    displayWeatherResults: function (obj) {
        if (obj.data.error) { // this catches a bad API key, missing parameter, etc...
            // var message = obj.data.error[0].msg;
            document.querySelector("#weatherContent").innerHTML = "<p>Oh No! We seem to be having trouble finding you. Try again</p>";
            $("#weatherContent").fadeIn(1000);
            return; // bail out
        }
        if (obj.data && obj.data.length == 0) { // if no data found
            document.querySelector("#weatherContent").innerHTML = "<p>No data found</p>";
            $("#weatherContent").fadeIn(1000);
            return; // bail out
        }
        // get value of date
        var line = "";
        var allDataCurrent = obj.data.current_condition[0];
        line = "<h5>Current Weather for " + obj.data.request[0].query + "</h5>";
        var tempF = allDataCurrent.temp_F;
        var lineLeft = "<h1> " + tempF + "&deg; F</h1>";
        lineLeft += "<h4> " + allDataCurrent.weatherDesc[0].value + "</h4>";
        lineLeft += "<h5> Feels like: " + allDataCurrent.FeelsLikeF + "&deg; F</h5>";
        var weatherDescription = allDataCurrent.weatherDesc[0].value;
        weather.decision(tempF, weatherDescription);
        $("#weatherContentLeft").fadeIn(1000);
        document.querySelector("#weatherContent").innerHTML = line;
        document.querySelector("#weatherContentLeft").innerHTML = lineLeft;
    }, //depending on weather, print different statements that decide what user should do
    decision: function (tempF, weatherDescription) {
        var stringHead = "<h4>";
        var stringSub = "<h5>";
        if (tempF >= 90) {
            stringHead += "It is waaaay too hot outside! </h3>";
            stringSub += "Avoid the outdoors at all cost!</h5>";
        }
        else if (tempF < 0) { // below 0
            stringHead += "Even the polar bears know to stay inside! </h4>";
        }
        else {
            stringHead += "It's a fine day.";
        }
        $("#displayOptions").fadeIn(1000);
        document.querySelector("#decisionContentSub").innerHTML = stringSub;
        document.querySelector("#decisionContentHead").innerHTML = stringHead;
        $("#decisionContent").fadeIn(1000);
    }
}