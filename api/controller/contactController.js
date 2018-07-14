
const ContactsModule = require('../model/contactModel')
//const userModel = require('../model/userModel')
const createContact = (req,res,next)=>{
  const contacts = new ContactsModule({
      "name": req.body.name,
      "email": req.body.email,
      "phone": req.body.phone,
      "social": req.body.social
  })
  console.log(contacts)
  contacts.save()
    .then(contacts=>{
        //console.log(contacts)
        res.status(201).json({
            contacts
        })
    })
    .catch(err=>{
        console.log(contacts)
        res.status(500).json({
            msg: "con't save this contact"
        })
    })
    /*userModel.findOneAndUpdate(
        {
            id: req.user._id
        },
        {
            $push: {contactId: 'ID-one'}
    })*/
}
const allContact = (req,res,next)=>{
    ContactsModule.find()
    .then(allContact=>{
        if(allContact.length>0){
            res.status(200).json({
                allContact
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
const singleContact = (req,res,next)=>{
    const id = req.params.id
    ContactsModule.findById({_id : id})
     .then(singleContact=>{
         console.log(singleContact)
         res.send(singleContact)
     })
     .catch(err=>{
         console.log(err)
         res.send(err)
     })
}
const upadeContact = (req,res,next)=>{
    const id = req.params.id
    ContactsModule.findByIdAndUpdate(id,{$set : req.body},{new: true})
    .then(updateContact=>{
        console.log(updateContact)
        res.json({
            updateContact
        })
    })
    .catch(err=>{
        console.log(err)
        res.send(err)
    })
}
const deleteContact = (req,res,next)=>{
    const id = req.params.id
    ContactsModule.findOneAndRemove({ _id: id })
    .then(deleteContact=>{
        console.log(deleteContact)
        res.json({
            deleteContact
        })
    })
    .catch(err=>{
        console.log(err)
        res.send(err)
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