const mongoose = require('mongoose')

const NotesSchema = new mongoose.Schema({
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'NotesUsers'
    },
    title:{
        type:String,
        trim:true,
        max:70
    },
    description:{
        type:String,
        trim:true
    },
    date:{
        type: Date,
        required:true
    }
},{
    timestamps: true
})

const Notes = mongoose.model('Notes', NotesSchema)

module.exports = Notes

