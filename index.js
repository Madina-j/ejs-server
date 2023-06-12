const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

const pages = [
  { route: "/", title: "Home", content: "Welcome to the homepage!" },
  { route: "/about", title: "About", content: "Learn more about us." },
  { route: "/contact", title: "Contact", content: "Get in touch with us." },
];
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
