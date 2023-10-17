// jshint esversion:6
const https = require('https');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("Public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var FName = req.body.fname;
  var LName = req.body.lname;
  var Email = req.body.email;

  const data = {
    members: [
        {
            email_address: Email,
            status: "subscribed",
            merge_fields: {
                FNAME: FName,
                LNAME: LName
            }
        }
    ]
  };

  const jsonData = JSON.stringify(data);
  
  const url = "https://us11.api.mailchimp.com/3.0/lists/200a344573";

  const option = {
    method: "POST",
    auth: "ayush:4ccb3a18f37648dffb1ca6993274934e-us11"
  };

  const request = https.request(url, option, function(response){

      if (res.statusCode === 200) {
        res.sendFile(__dirname + "/Success.html");
      } else {
        res.sendFile(__dirname + "/Failed.html");
      }

      response.on("data", function(data){
        console.log(JSON.parse(data));
      });
  });

  request.write(jsonData);
  request.end();
  //    res.on("data", function(data){
  //     console.log(data);
  //     const formData = JSON.parse(data);
  //     console.log(formData);
  //     res.send(formData);
  //    })
  // res.send("Your submited data is: " + Name + ", " + Email);
//   console.log(req.body);
  // res.send(name);

  // JSON.stringify is used for convert the object form data into the single line string in JSON formate
});
// app.post("/")
app.listen(3001, function () {
  console.log("Server has started at 3001");
});

console.log("hello");









// Apikey = 4ccb3a18f37648dffb1ca6993274934e-us11
// listid = 200a344573