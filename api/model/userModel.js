const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
   },
   email: {
    type: String,
    trim: true,
    unique : true
   },
   userName: {
    type: String,
    trim: true,
    unique : true,
    required: true,
   },
   password: {
    type: String,
    unique : true,
    required: true,
    minlength: 6
   },userRef:[
   {
     contactList:{
       type: String,
       trim: true,
       unique : true
     },
     favoriteList:{
       type: String,
       trim: true,
       unique : true
     }
    }
  ]
  })

const user= mongoose.model('user', userSchema)

module.exports = user