// const express = require('express');

// const serverConfig = require('./config/serverConfig')

// const connectDB = require("./config/dbConfig")

// const app = express();

// app.post('/ping',(req,res)=>{

//     console.log(req.body)
//     return res.json({
//         message:"pong",
//         mime:"chana"
//     })
// })
// app.listen(serverConfig.PORT, async () => {
//     await connectDB()
//     console.log('now after adding environment variable port is access by ', serverConfig.PORT);

// })


//directly writing a post or configurable code is bad practice so we need to
//write this kind of code in environmental variable that are good practice 


/////////////////////////////////////////////////////////////////////////////

// const express = require('express');

// const serverConfig = require('./config/serverConfig')

// const bodyParser = require('body-parser');
// const connectDB = require("./config/dbConfig")

// const app = express();

// app.use(bodyParser.json());//deserialization 
// app.use(bodyParser.text());
// app.use(bodyParser.urlencoded())


// app.post('/ping',(req,res)=>{

//     console.log(req.body)
//     return res.json({
//         message:"pong",
//         mime:"chana"
//     })
// })
// app.listen(serverConfig.PORT, async () => {
//     await connectDB()
//     console.log('now after adding environment variable port is access by ', serverConfig.PORT);

// })

//////////////////////////////////////////////
// const express = require('express');
// const serverConfig = require('./config/serverConfig')
// const connectDB = require("./config/dbConfig");
// const User = require('./scema/userSchema');
// const app = express();
// app.use(express.json());//deserialization  //no need to import body parse because this is by default given by express 
// app.use(express.text());
// app.use(express.urlencoded({ extended: true }))

// app.listen(serverConfig.PORT, async () => {
//     await connectDB()
//     console.log('now after adding environment variable port is access by ', serverConfig.PORT);
//this is used for testing purpose
//     const newUser = await User.create({
//         first_Name: "prashant",
//         last_Name: "Dewangan",
//         email: 'a@bc.com',
//         password: '123321',
//         mobile_Number: 1234567850,

//     })
//     console.log("new user", newUser);

// })


//////////////////////////////////////////////////////////////////
const express = require('express');
const serverConfig = require('./config/serverConfig')
const connectDB = require("./config/dbConfig");
const userRoutes = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const User = require('./scema/userSchema');
const cookieParser = require('cookie-parser');
const { isLongedIn } = require('./validation/authvalidator');
const app = express();
app.use(express.json());//deserialization  //no need to import body parse because this is by default given by express 
app.use(express.text());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())//for parsing the cookies

//routing middleware 
// if your req start with /users then handle by useRouters
app.use('/users', userRoutes)//connect router to server 

app.use('/auth', authRouter)


app.get('/ping', isLongedIn, (req, res) => {
    // controller
    // console.log(req.body)
    console.log(req.cookies)//for checking the cookies
    return res.json({
        message: "pong",
    })
})


app.listen(serverConfig.PORT, async () => {
    await connectDB()
    console.log('now after adding environment variable port is access by ', serverConfig.PORT);

    // const newUser = await User.create({
    //     firstName: "Pratik",
    //     lastName: "Sahu",
    //     email:'prashant@Sahu2.com',
    //     password:'000002',
    //     mobileNumber: "0000000002",
    // })
    // console.log("new user", newUser);
})




// localhost:5000/users/   ->Post
// localhost:5000/auth  ->Get