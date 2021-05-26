const express = require('express')
const cors = require('cors')
const connectDB = require('./db/connectDB')

require('dotenv').config();

const app = express();
app.use(express.json())
app.use(cors())
connectDB();

const routerNotes = require('./routes/routeNotes')
app.use('/notes', routerNotes)


const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log('Server is runing on PORT : ', port )
})
