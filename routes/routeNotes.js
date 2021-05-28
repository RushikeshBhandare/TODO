const router = require('express').Router()
const Notes = require('../models/notes')
const verify = require('./verifyToken')

router.get(('/'),verify, async(req,res)=>{
  try{
    const responce = await Notes.find({userid : req.user._id})
    if(!responce){
        responce.send('Not Data Found ')
    }
    res.send(responce)

  }catch(error){
      res.status(404).send(error)
  }     

})

router.post(('/add'), verify ,async(req, res)=>{
    try{
        const userid = req.user._id;
        const title = req.body.title;
        const description = req.body.description;
        const date = req.body.date;
        const newNote = new Notes({
            userid,
            title,
            description,
            date
        })

        await newNote.save()
        res.send('Notes Added')

    }catch(error){
        res.status(404).send(error)
    }
})


router.post(('/delete'), verify , async (req,res)=>{
    try{
      
        const notedeleted = await Notes.findByIdAndDelete(req.body._id)

        console.log(notedeleted)       
    }catch(error){
        res.status(400).send(error)
    }
})






module.exports = router