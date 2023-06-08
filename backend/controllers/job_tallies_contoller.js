const job_tallies=require('express').Router()
const db=require('../models')
const {job_tally}=db


job_tallies.post('/tallies', async(req,res)=>{
    try{
        console.log(req.body)
    }catch(error){
        res.status(500).json(error)
    }
})
module.exports = job_tallies;