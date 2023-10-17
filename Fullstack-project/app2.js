const express = require('express')
const mongoose = require('mongoose')
const port = 2500;


const url = 'mongodb://127.0.0.1/zomato'
mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  });


  const database =mongoose.connection;
database.on("error", console.error.bind(console, "connection error: "));
database.once("open", () => {
  console.log("Database Connected");
});

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
  var collection = url.collection('restaurants');
  collection.find().toArray(function(err, kittens){
    kittens.find().where('name', 'Dominos')
  })

  res.send('Home')
});

app.listen(port, () => {
    console.log("Server started at 2500");
  });
  
