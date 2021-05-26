const express = require('express')
const cors = require('cors')
const connectDB = require('./db/connectDB')
const path = require('path')

require('dotenv').config();

const app = express();
app.use(express.json())
app.use(cors())
connectDB();

const routerNotes = require('./routes/routeNotes')
app.use('/notes', routerNotes)

//Serve static Assets if we are in production

if(process.env.NODE_ENV == "production"){
    //Set Static Folder
    app.use(express.static('frontend/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log('Server is runing on PORT : ', port )
})
