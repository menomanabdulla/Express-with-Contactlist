
const userModel = require('../model/userModel')

const signUpUser = (req,res)=>{
    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password
    })
    contacts.save()
      .then(user=>{
          console.log(user)
          res.status(201).json({
            user
          })
      })
      .catch(err=>{
          console.log(err)
          res.status(500).json({
              err
          })
      })
  }
  
const signInUser = (req,res)=>{
      res.json({
          msg: 'user sign in complete'
      })
  }
  
const user = (req,res)=>{
      res.json({
          msg: 'hello form user'
      })
  }
  
const upadateUser = (req,res)=>{
      res.json({
          msg: 'hello form user update'
      })
  }
  
const faveList = (req,res)=>{
    res.json({
        msg: 'hello form favourite'
    })
}

const faveListUpdate = (req,res)=>{
    res.json({
        msg: 'hello form Favourite List update'
    })
}

const faveListDelete = (req,res)=>{
    res.json({
        msg: 'hello form Favourite List Delete'
    })
}
  
module.exports = {
    signUpUser,
    signInUser,
    user,
    upadateUser,
    faveList,
    faveListUpdate,
    faveListDelete
}