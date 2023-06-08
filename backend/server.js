require('dotenv').config()
const express=require('express')
const app=express()
const PORT = process.env.PORT
const {Sequelize}=require('sequelize')
const cors=require('cors')
const bodyParser=require("body-parser")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const job_talliesController=require('./controllers/job_tallies_contoller')
app.use('/job_tallies',job_talliesController)

app.get('/',(req,res)=>{
    res.send('Welcome to JOB Tally')
})

const sequelize=new Sequelize({
    dialect:'postgres',
    host:'localhost',
    database:'Job_Tally',
    username:'postgres',
    password:process.env.POSTGRES_PASSWORD,
    port:5432,
    logging:true,

})
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.listen(PORT,()=>{
    console.log('listening on port',PORT)
})