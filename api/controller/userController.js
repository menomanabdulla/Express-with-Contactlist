
const userModel = require('../model/userModel')

const signUpUser = (req,res)=>{
    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password
    })
    user.save()
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
const singleUser = (req,res,next)=>{
   const id = req.params.id
   userModel.findById({_id : id})
    .then(singleUser=>{
        console.log(singleUser)
        res.send(singleUser)
    })
    .catch(err=>{
        console.log(err)
        res.send(err)
    })
}
const user = (req,res,next)=>{
    userModel.find()
        .then(user=>{
            if(user.length>0){
                res.status(200).json({
                    user
                })
            }else{
                res.status(200).json({
                    msg: 'there data is empty'
                })
            }
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                err
            })
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
    singleUser,
    upadateUser,
    faveList,
    faveListUpdate,
    faveListDelete
}