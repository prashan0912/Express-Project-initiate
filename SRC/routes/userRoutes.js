const express = require('express');
const { createUser } = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.get('/', createUser)//this is a route registration 

module.exports = userRoutes //exporting the router
