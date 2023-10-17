// jshint esversion : 6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

// var tasks = [""];

// database connection and its(db) name.
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/tasklistDB",{useNewUrlParser: true});

// Making schema for our database
const tasksSchema = new mongoose.Schema ({
    name: String
});

// Making Collection for database
const Task =  mongoose.model('Task', tasksSchema);

const task1 = new Task({
    name: "Get Fresh"
});

const task2 = new Task({
    name: "Fold Your Blancket"
});

const task3 = new Task({
    name: "Let's Go To Run!"
});

const defaultTasks = [task1, task2, task3];

app.get("/", function(req, res){

     Task.find({}, (err, foundTasks)=>{

        if(foundTasks.length === 0){
             Task.insertMany(defaultTasks, function(err){
                if(err){
                    console.log(err);
                } else {
                    console.log("Successfully inserted defaultTasks into tasks");
                }
            });
            res.redirect('/');
    } else {
        res.render('list', { listTitle: "Today" , newtaskNames: foundTasks});
    }
});

    // res.sendFile(__dirname+"/index.html");
    // res.render('list', {taskName : tasks});
});

app.post("/", function(req, res){
    var task = req.body.newtaskNames;
    // tasks.push(task);
    console.log(task);
    res.redirect("/");
});




app.listen(5050, function(){
    console.log('Server has established at 5050');
});

