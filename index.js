const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookiePrser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenev = require('dotenv')
dotenev.config();

//bring routes
const authRoute = require('./controller/auth')

const app = express()

//Database
mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

//Middlewares
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cookiePrser())

//cors
if(process.env.NODE_ENV==='development'){
    app.use(cors({origin:`${process.env.CLIENT_URL}`}))
}

//routes middlewares
app.use("signup", authRoute);

app.get('/api',(req,res)=>{
    res.send('Server is working')
})

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is listening at port${port}`)
})