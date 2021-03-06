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
    minlength: 3,
    validate: {
      validator: v =>{
        return validator.isEmail(v)
      },
      message: '{VALUE} is not a valid email'
    }
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
   },
   contacts: { 
    type: Array, 
    default: void 0
  },
  favorites: { 
      type: Array, 
      default: void 0
  }

  })

const user= mongoose.model('user', userSchema)

module.exports = user

/*,userRef:[
   {
     contactList:{
       type: String,
       trim: true
     },
     favoriteList:{
       type: String,
       trim: true
     }
    }
  ] */