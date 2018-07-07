const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const userRoute = require('./api/router/userRouter')
const contactRouter = require('./api/router/contactRouter')
//db connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://menomanabdulla:noman123321BAPPY@ds121861.mlab.com:21861/rest-mvc', { useNewUrlParser: true })
.then(res => console.log(`DB Connected`))
.catch(err=>console.log(err))

//middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/contact',contactRouter)
app.use('/api/user',userRoute)

//error handaling
app.use((req,res,next)=>{
    const err = new Error('not Found')
    err.status = 404
    next(err)
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error
    })
})


app.listen(PORT,()=>{
    console.log(`server running on the ${PORT}`)
})

app.get('/',(req,res)=>{
    res.json(
        {
            msg: 'hello world'
        }
    )
})
