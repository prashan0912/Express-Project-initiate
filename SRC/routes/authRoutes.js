const express =require('express')

const {login} = require('../controllers/authController')

const authRouter = express.Router();
// console.log('authrouter')

authRouter.post('/login',login);

module.exports=authRouter