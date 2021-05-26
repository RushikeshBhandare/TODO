const router = require('express').Router()
const Notes = require('../models/notes')


router.route('/').get(async(req,res)=>{
  try{
    const responce = await Notes.find({})
    if(!responce){
        responce.send('Not Data Found ')
    }
    res.send(responce)

  }catch(error){
      res.status(404).send(error)
  }     

})

router.route('/add').post(async(req, res)=>{
    try{
        console.log(req.body)
        const title = req.body.title;
        const description = req.body.description;
        const date = req.body.date;
        const newNote = new Notes({
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







module.exports = router