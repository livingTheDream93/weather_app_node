const axios = require("axios");

const forecast = async function (coordinates) {
  try {
    var options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: coordinates.location,
        lat: coordinates.latitude,
        lon: coordinates.longitude,
      },
      headers: {
        "x-rapidapi-key": "9f92bbd2fbmsh96754b80c39d812p1e7f06jsncd0bbb04d4c5",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "useQueryString": true,
        
      },
    };
    let res = await axios.request(options)
    console.log(res)
    return res
  } catch (err) {
    console.log(err);
  }
};

module.exports = forecast;
