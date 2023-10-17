//jshint esversion: 6

const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true,useUnifiedTopology:true}).then(()=> {
    console.log("Connected to MongoDB successfully")
}).catch((err)=>{
    console.log(err)
})

// lets make Schema of our database

const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number

})

// Now make Collection(table)
// there is a diffrence b/w Students & student which is Both first word are capital and small and "small student is schema" and "other one is Model/collections/table"

const Student = new mongoose.model("Student", student);

// let create or put data into the schema

// first of all we create a function and inside that function we insert data into the schema

const adder = async ()=>{
    
    // await is used for return promise which is true or false after save
    
    const ss = await Student.create({
    name: "Shekhar",
    workout: true,
    height: 5.7
    });


    console.log(ss);

}

adder();
