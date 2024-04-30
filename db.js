const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://sprateek9838:urbanswift1991@cluster0.dknblug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose