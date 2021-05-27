const router = require('express').Router()
const NotesUsers = require('../models/users')

router.route('/').get(async(req,res)=>{
    try{
        const responce = await NotesUsers.find({})
        if(!res){
            res.send('user Not Found')
        }
        res.send(responce)
    }catch(error){
        res.send(error)
    }
})

router.route('/add').post(async(req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
        const gender = req.body.gender;
        const age = req.body.age;
        const email = req.body.email;
        const mobileno = req.body.mobileno;

        const newuser = new NotesUsers({
            username,
            password,
            gender,
            age,
            email,
            mobileno
        })
        
        await newuser.save()
        console.log(newuser)
        res.send('User Added success')
    }catch(error){
        res.send(error)
    }

})

router.route('/username').post(async(req, res)=>{
    try{
        const data = await NotesUsers.findOne({username: req.body.username})
        if(!data){
            res.send('user not found')
        }
        res.send('user found')
    }catch(error){
        res.status(404).send(error)
    }
})

router.route('/email').post(async(req, res)=>{
    try{
        const data = await NotesUsers.findOne({email: req.body.email})
        if(!data){
            res.send('email not found')
        }
        res.send('email found')
    }catch(error){
        res.status(404).send(error)
    }
})



module.exports = router