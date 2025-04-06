const express = require('express');
const { createUser } = require('../controllers/userController'); //importing the controller function

const userRoutes = express.Router();

userRoutes.post('/', createUser)//this is a route registration 

module.exports = userRoutes //exporting the router
