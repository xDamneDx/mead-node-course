const { weatherApiKey } = require("../api");
const request = require("postman-request");

const forecast = (longitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${latitude},${longitude}`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to weather service!", undefined);
    } else if (res.body.error) {
      callback("Unable to find location.", undefined);
    } else {
      const { temperature, feelslike, weather_descriptions } = res.body.current;

      callback(
        undefined,
        `${weather_descriptions[0]}. It is currently ${temperature} degress out. It feels like ${feelslike} degress out.`
      );
    }
  });
};

module.exports = forecast;
