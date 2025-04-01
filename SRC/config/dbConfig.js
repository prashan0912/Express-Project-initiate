const mongoose = require('mongoose');
const serverConfig = require('./serverConfig')


// function for establishing connection between DB and project 
async function connectDB(){

    try{

        await mongoose.connect(serverConfig.DB_URL)
        console.log("connection established to the DataBase Server");

    }catch(error){

        console.log("something went wrong");
        console.log(error)
    }
}
module.exports=connectDB;