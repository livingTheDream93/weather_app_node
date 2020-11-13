const axios = require("axios");

// const geoCode = async function (address) {
//   try {
//     let res = await axios.get(
//       "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//         address +
//         ".json?access_token=pk.eyJ1IjoiYXl1c2hzaW5oYTAwNyIsImEiOiJja2hhdW03MHMwNW96MnVwNzB3eDNzM2F6In0.Z3dv_IBRgcCPPA-dBxD26g&limit=1"
//     );
//     return res.data.features;
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = geoCode;

const geocode = async function (address) {
  try {
    let res = await axios.get(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        address +
        ".json?access_token=pk.eyJ1IjoiYXl1c2hzaW5oYTAwNyIsImEiOiJja2hhdW03MHMwNW96MnVwNzB3eDNzM2F6In0.Z3dv_IBRgcCPPA-dBxD26g&limit=1"
    );
    return res.data.features;
  } catch (err) {
    console.log(err);
  }
};


module.exports = geocode
