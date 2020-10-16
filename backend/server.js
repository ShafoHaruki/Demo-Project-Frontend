//importing
import express from 'express'
import mongoose from 'mongoose'

//app config
const app = express()
const port = process.env.PORT || 9000

//middleware

//DB config
const connection_url = 'mongodb+srv://admin:NZpPKTypmmUFSEDO@cluster0.lyjir.mongodb.net/demoProjectDB?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//API routes
app.get('/',(req,res) => res.status(200).send("Hello world"))

//listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`))

//NZpPKTypmmUFSEDO