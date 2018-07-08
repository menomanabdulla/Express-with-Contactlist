
const Contacts = require('../model/contactModel')
const createContact = (req,res)=>{
  const contacts = new Contacts({
      "name": req.body.name,
      "email": req.body.email,
      "phone": req.body.phone,
      "social": req.body.social
  })
  contacts.save()
    .then(contacts=>{
        console.log(contacts)
        res.status(201).json({
            contacts
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            err
        })
    })
}
const allContact = (req,res)=>{
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
const singleContact = (req,res)=>{
    res.json({
        msg: 'hello form single contact'
    })
}
const upadeContact = (req,res)=>{
    res.json({
        msg: 'hello form update contact'
    })
}
const deleteContact = (req,res)=>{
    res.json({
        msg: 'hello form delete contact'
    })
}

/*const searchContact = (req,res)=>{
    res.json({
        msg: 'hello form search contact'
    })
}*/

module.exports = {
    createContact,
    allContact,
    singleContact,
    upadeContact,
    deleteContact
}