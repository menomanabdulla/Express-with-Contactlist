
const ContactsModule = require('../model/contactModel')
const createContact = (req,res)=>{
  const contacts = new ContactsModule({
      "name": req.body.name,
      "email": req.body.email,
      "phone": req.body.phone,
      "social": req.body.social
  })
  ContactsModule.save()
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