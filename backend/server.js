require("dotenv").config();
const express=require('express')
const bodyParser = require("body-parser");
const cors=require("cors")
const app=express()
const PORT = process.env.PORT


app.use(cors());
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const job_talliesController=require('./controllers/job_tallies_contoller')
app.use('/job_tally',job_talliesController)
const User_Controller=require('./controllers/User_Controller')
app.use('/auth',User_Controller)
const Calc_Controller=require('./controllers/calc')
app.use('/calc',Calc_Controller)

app.get('/',(req,res)=>{
    res.send('Welcome to JOB Tally')
})

app.listen(PORT,()=>{
    console.log('listening on port',PORT)
})