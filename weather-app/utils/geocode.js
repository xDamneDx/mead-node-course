const { geocodingApiKey } = require("../api");
const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${geocodingApiKey}&limit=1`;

  request({ url, json: true }, (error, res) => {
    if (error) {
      callback("Unable to connect to location services.", undefined);
    } else if (res.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      const [longitude, latitude] = res.body.features[0].center;

      callback(undefined, {
        longitude,
        latitude,
        location: res.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
