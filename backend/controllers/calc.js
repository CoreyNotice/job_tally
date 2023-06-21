const router=require('express').Router()
const db=require('../models')
const {Tallies}=db

router.get('/:userOwnerId', async (req, res) => {
    try{
      let userOwnerId = Number(req.params.userOwnerId) 
      if (isNaN(userOwnerId)) {
          res.status(404).json({ message: `Invalid id "${userOwnerId}"` })
      } else {
          const tallies = await Tallies.findAll({
            attributes: ['Job_Applied'],  
            where: { userOwnerId: userOwnerId },
             
          })
          if (!tallies) {
              res.status(404).json({ message: `Could not find place with id "${userOwnerId}"` })
          } else {
              res.json(tallies)
              console.log(tallies)
          }
      }
  }catch(error){
      res.status(500).json(error)
  }
  
  })

  module.exports = router;