const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    }
},{
    timestamps: true
})

const Notes = mongoose.model('Notes', NotesSchema)

module.exports = Notes

