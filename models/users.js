const mongoose = require('mongoose')

const NotesUsersShema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    },
    gender:{
        type:String,
    },
    age:{
        type:String
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true

    },
    mobileno:{
        type:Number,
        trim:true
    },
})

const NotesUsers = mongoose.model('NotesUsers', NotesUsersShema)

module.exports = NotesUsers