const jwt = require('jsonwebtoken');
const bcrypt=require("bcrypt");
const router=require('express').Router()
const db=require('../models')
const {Users}=db

router.post('/register', async(req,res)=>{
   try{
            const{userName,password}=req.body;
            const user= await Users.findOne({where:{userName}})
            if (user){
                return res.json({message:"User already exists!"});
            }
           const hashedPassword= await bcrypt.hash(password,10)
            const newUser= await Users.create({userName,password:hashedPassword});
        }catch(err){
            res.status(500).json(err)
            console.log(err)

        }
        res.json({message:"User Registered Successfully"})
       
})
router.post('/login',async(req,res)=>{
    const {userName,password}=req.body
    const user= await Users.findOne({where:{userName}});
     if(!user){
        return res.json({message:"User Doesn't Exist!"});
     }
     const isPasswordValid=await bcrypt.compare(password,user.password);

     if (!isPasswordValid){
        return res.json({message:"Username or Password Is Incorrect!"});
     }
     const token=jwt.sign({id:user._id},process.env.TOKEN_SECRET);
     res.json({token,userID:user.id})
    })

module.exports = router;