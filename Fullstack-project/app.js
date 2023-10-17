const express = require("express");
const mongoose = require("mongoose");
const router = require('./Routes/route')
const port = 2500




const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(router)
app.use(express.urlencoded({ extended: true }));








app.listen(port, () => {
  console.log("Server started at 2500");
});
