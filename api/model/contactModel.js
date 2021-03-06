const mongoose = require('mongoose')
//const validator = require('validator')
const Schema = mongoose.Schema

const contactSchema = new Schema({
   name: {
      type: String,
      required: true,
      trim: true
   },
   email: {
    type: String,
    trim: true,
    minlength: 3
   },
   phone:{
    type: String,
    trim: true,
    required: true,
    unique : true
   },
   social:{
      type: String,
      trim: true,
      required: true
    }
  })

const contacts= mongoose.model('contacts', contactSchema)

module.exports = contacts

/*
,
    validate: {
      validator: v =>{
        return validator.isEmail(v)
      },
      message: '{VALUE} is not a valid email'
    }
*/ 