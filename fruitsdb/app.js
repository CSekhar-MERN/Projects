const mongoose = require('mongoose');


mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/fruitDB", {useNewUrlParser: true}).then(()=> {
    console.log("Connected Successfully to Your Database")
}).catch((err)=>{
    console.log(err)
})

// Make a schema for our db

const fruitsSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please give a name of your data which you wana to store"]
    },
    rating: Number,
    review: String
});

// Make a model(collection)
const Fruit = mongoose.model("Fruit", fruitsSchema);

// const fruit = new Fruit ({
//     name: "Apple",
//     rating: 7,
//     review: "Sweet and Protein rich fruit."
// });

// const fruit = new Fruit ({
//     name: "Peaches",
//     rating: 5,
//     review: "Best apee ever in the whole market i got.."
// });

const pineapple = new Fruit ({
    name: "Pineapple",
    rating: 9,
    review: "Best app for drink as a juice"

});
// pineapple.save();

// add one more schema
const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitsSchema
});

const People = new mongoose.model("People", peopleSchema);

const people = new People({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
})

// const people = new People ({
//     name: "John",
//     age: 30
// });

// const fadric = new People ({
//     name: "Fadric",
//     age: 32
// });

// const danial = new People ({
//     name: "Danial",
//     age: 28
// });

// People.insertMany([fadric, danial], (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//        console.log("Successfully inserted into the people");
//     };
//     console.log(people);
// });

// Delete Many

// People.deleteMany({name: "Fadric"}, (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully Deleted from peoples collection");
//     }
// });

// People.deleteMany({name: "Danial"}, (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully Deleted from peoples collection");
//     }
// });

People.find((err, people)=>{
    if (err) {
        console.log(err);
    } else {
        people.forEach((people)=>{
            console.log(people.name);
        })
    }
});

// people.save();

// Insert 3 more fruits into the fruit collection
// const kiwi = new Fruit ({
//     name: "Kiwi",
//     rating: 9,
//     review: "The best fruit ever"
// });

const orange = new Fruit ({
    name:"Orange",
    rating: 10,
    review: "Best for juice flavour"
});

// const banana = new Fruit ({
//     name : "Banana",
//     rating: 7,
//     review: "Its best for Stamina"
// });

// Insert many data into the database but it will insert data again and again whenever server refresh or restart

// Fruit.insertMany([kiwi, orange, banana], ((err)=> {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully inserted into the fruits Collection")
//     }
// }));

// Find Function 

Fruit.find(function(err, fruits) {
    if(err){
        console.log(err);
    } else {

        
        fruits.forEach(function(fruit){
            console.log(fruit.name);
            // console.log(fruit);

            mongoose.connection.close();
        })
        // console.log(fruit);

    }
});


// Delete an data into the database

// Fruit.deleteOne({name: "Peaches"}, function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Succefully deleted " +fruit.name);
        
//     }
    
// })
// console.log(fruit);

// Update an data into the database

// Fruit.updateOne({_id: "63f3435c2e05041e0ccd5e35"}, {name: "Peaches"}, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully updated " + fruit.name);
//     }
// });

// People.updateOne({name: "John"}, {favouriteFruit: orange}, (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully Updated John");
//     }
// });
