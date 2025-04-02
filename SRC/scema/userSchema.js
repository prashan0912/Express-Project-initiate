const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_Name: {
        type: String,//data type of element
        required: [true, "First Name is Required"], // true denote compulsory and index 1 denote erroe message thown when this field is Empty
        minlength: [5, "First name must be 5 character"],
        //to know more about validation search in google
        lowercase: true,
        trim: true,
        maxlength: [20, "given input must in less than 20"]
    },
    last_Name: {
        type: String,//data type of element
        required: [true, "last Name is Required"], // true denote compulsory and index 1 denote erroe message thown when this field is Empty
        minlength: [5, "last name must be 5 character"],
        //to know more about validation search in google
        lowercase: true,
        trim: true,
        maxlength: [20, "given input must in less than 20"]
    },
    mobile_Number: {
        type: String,
        minlength: [10, "number mush be in 10 digit"],
        maxlength: [10, "number mush be in 10 digit"],
        trim: true,
        unique: [true, "phone number is already in use"],
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: [true, "email should be provided"],
        unique: [true, "email already use"],
        // use regular expression for email match patter  taken from google
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, "password should be provided"],
        minlength: [6, "password should be minimum 6 digit"],
    }
},{
    timestamps:true,
})

const User = mongoose.model("User",userSchema) //collection

module.exports = User;