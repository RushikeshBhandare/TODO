const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const NotesUsers = require('../models/users')
const { route } = require('./routeNotes')
const verify = require('./verifyToken')
require('dotenv').config()

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

const salt = bcrypt.genSaltSync(10)

router.route('/add').post(async(req,res)=>{
    const hasedPassword = bcrypt.hashSync(req.body.password)
    try{
        const username = req.body.username;
        const password = hasedPassword;
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
        
        const added = await newuser.save()
        console.log(newuser)
        res.send(added)
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

router.route('/login').post(async(req, res)=>{
    try{
        console.log("Call to Login Request ")
        const user = await NotesUsers.findOne({email: req.body.email})
        if(!user){
            res.send('email or password incorrect')
        }
        const passwordCheck = await bcrypt.compareSync(req.body.password, user.password)
        if(!passwordCheck){
            res.send('password not match ')
        }

        //Create and assig na token 
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
        res.header('auth-token', token).send({
            _id: user._id,
            username : user.username,
            gender:user.gender,
            email:user.email,
            mobileno: user.mobileno,
            token: token
        })

    }catch(error){
        console.log(error)
        res.status(404).send("login Error : -"+error)
    }
})

router.route('/profile').post(verify, async(req,res)=>{
    try{
      const user = await NotesUsers.findById({_id : req.user._id})
      if(!user){
          responce.send('Not Data Found ')
      }
      res.send(user)
  
    }catch(error){
        res.status(404).send("Login "+ error)
    }     
  
  })
  
const HEllO =  () =>{

}


module.exports = router