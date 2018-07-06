const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactShema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  })

const sontactShema = mongoose.model('contactShema', blogSchema)