const { geocodingApiKey } = require("../api");
const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${geocodingApiKey}&limit=1`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to location services.", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      const {
        center: [longitude, latitude],
        place_name: location,
      } = body.features[0];

      callback(undefined, {
        longitude,
        latitude,
        location,
      });
    }
  });
};

module.exports = geocode;
