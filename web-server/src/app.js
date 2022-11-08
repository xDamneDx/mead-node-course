const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define path for express config:
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine & views location:
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve:
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "xDamneDx",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "xDamneDx",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "xDamneDx",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It's snowing",
    location: "Somewhere",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: '404',
    errorMessage: "Help article not found...",
    name: "xDamneDx",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: '404',
    errorMessage: "Oops, page not found...",
    name: "xDamneDx",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000...");
});
