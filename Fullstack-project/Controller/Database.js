const express = require('express');
const mongoose = require('mongoose')
const Students = require('../Models/Student')


const url = "mongodb://127.0.0.1/students"

mongoose.connect(url, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
});

// Database Connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database Connected");
});





module.exports = db;