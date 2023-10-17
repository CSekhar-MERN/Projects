const express = require('express');
const mongoose = require('mongoose')
const ejs = require('ejs');
const student = require('./models/student')

const uri = 'mongodb://127.0.0.1/Schools';

mongoose.connect(uri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '))
db.once('open',()=>{
    console.log('Database Connnected')
});

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.render('Form')
})

const std = new student({
    Sid:102,
    Name:'Ayush',
    Age:22,
    Physics:46,
    Chemestry: 63,
    Maths: 76,
})
// std.save();
app.post('/students', async(req, res)=>{
    const Student = new student(req.body);
    console.log(Student);
    await Student.save();
    res.redirect('/students')
})
app.get('/students', async(req, res)=>{
    const Student = await student.find({});
    res.render('student', { Student });
})

app.post('/students/:id/result', async(req, res) =>{
    const id = req.params.id;
    const Student = await student.find({Sid: id})
    res.render('student', { Student });
})
app.listen(8503, ()=>{
    console.log('Server is running on 8503');
})