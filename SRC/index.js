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
const express = require('express');
const serverConfig = require('./config/serverConfig')
const connectDB = require("./config/dbConfig")
const app = express();
app.use(express.json());//deserialization  //no need to import body parse because this is by default given by express 
app.use(express.text());
app.use(express.urlencoded({extended:true}))

app.listen(serverConfig.PORT, async () => {
    await connectDB()
    console.log('now after adding environment variable port is access by ', serverConfig.PORT);

})