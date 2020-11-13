const path = require("path");
const express = require("express");
const hbs = require("hbs");
const { default: axios } = require("axios");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const app = express();
const  port = process.env.PORT || 3000



// setup paths for express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// setup handlebars view engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicPath));

// setup routes
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Ayush",
  });
});

app.get("/about", (req, res) => {
  res.render("team", {
    title: "About",
    name: "Ayush",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help!",
    name: "Ayush",
  });
});

app.get("/weather", async (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You need to send a valid address",
    });
  }
  let address = req.query.address;
  let body = await geocode(address);
  console.log(body);
  let coordinates = {
    latitude: body[0].center[1],
    longitude: body[0].center[0],
    location: body[0].place_name,
  };
  try {
    let weatherData = await forecast(coordinates);
    console.log(weatherData.data);
    res.send(weatherData.data)
  } catch (err) {
    console.log(err.response)
  }
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "Please provide a search term",
    });
  }
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    title: "help 404",
    name: "Ayush",
    message: "Help page not found",
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "404",
    name: "Ayush",
    message: "Page not found - 404",
  });
});

app.listen(port, () => {
  console.log("Server running on " + port);
});
