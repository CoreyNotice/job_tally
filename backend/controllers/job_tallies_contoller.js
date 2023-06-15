const router=require('express').Router()
const db=require('../models')
const {Tallies}=db



router.get('/', async(req,res)=>{
    try{
       const jobs_=await Tallies.findAll()
       res.json(jobs_) 
    }catch(error){
        res.status(500).json(error)
    }
})
router.post('/', async (req,res)=>{
   try{ const jobs_=await Tallies.create(req.body)
    res.json(jobs_)
   }catch(error){
    res.status(500).json(error)
   }
})
module.exports = router;