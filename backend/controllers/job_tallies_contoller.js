const router=require('express').Router()
const db=require('../models')
const {Tallies}=db

router.get('/:userOwnerId', async(req,res)=>{
    try{
        let userOwnerId = Number(req.params.userOwnerId) 
        if (isNaN(userOwnerId)) {
            res.status(404).json({ message: `Invalid id "${userOwnerId}"` })
        } else {
            const tallies = await Tallies.findAll({
                where: { userOwnerId: userOwnerId },
               
            })
            if (!tallies) {
                res.status(404).json({ message: `Could not find place with id "${userOwnerId}"` })
            } else {
                res.json(tallies)
            }
        }
    }catch(error){
        res.status(500).json(error)
    }

})

router.post('/:userOwnerId', async (req, res) => {
    let userOwnerId = Number(req.params.userOwnerId);
    if (isNaN(userOwnerId)) {
      res.status(404).json({ message: `Invalid id "${userOwnerId}"` });
    } else {
      try {
        const tallies = await Tallies.create({
          userOwnerId: userOwnerId,
          ...req.body,
        });
        res.json(tallies);
        console.log(tallies);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating new table' });
      }
    }
  });
router.get('/:userOwnerId', async (req, res) => {
  try{
    let userOwnerId = Number(req.params.userOwnerId) 
    if (isNaN(userOwnerId)) {
        res.status(404).json({ message: `Invalid id "${userOwnerId}"` })
    } else {
        const tallies = await Tallies.findAll({
            where: { userOwnerId: userOwnerId },
           
        })
        if (!tallies) {
            res.status(404).json({ message: `Could not find place with id "${userOwnerId}"` })
        } else {
            res.json(tallies.Job_Applied)
            console.log(tallies.Job_Applied)
        }
    }
}catch(error){
    res.status(500).json(error)
}

})
module.exports = router;