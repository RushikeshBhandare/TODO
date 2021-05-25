const mongoose = require('mongoose')

require('dotenv').config()

const connectDB = () =>{
    console.log('hi')
    const URI = process.env.ATLAS_URI
    mongoose.connect(URI, {
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true
    })

    mongoose.connection.once('open', ()=>{
        console.log("MONGODB connected SUCCESS >>>>> ")
    })
}

module.exports = connectDB