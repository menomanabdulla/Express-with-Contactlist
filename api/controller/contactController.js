
const ContactsModule = require('../model/contactModel')
const userModel = require('../model/userModel')
const createContact = (req,res,next)=>{
  const contacts = new ContactsModule({
      "name": req.body.name,
      "email": req.body.email,
      "phone": req.body.phone,
      "social": req.body.social
  })
  contacts.save()
    .then(contacts=>{
        //console.log(contacts)
        res.status(201).json({
            contacts
        })
        
        userModel.findOneAndUpdate(
            {
                _id: `${res.locals._id}`
            },
            {
                $push: {'contacts': `${contacts._id}`}
            },
            {new: true},
            function(err, doc){
                if(err){
                    console.log("Error pushing contacts in user");
                }
                console.log(doc);
            }
        )
    })
    .catch(err=>{
        console.log(contacts._id)
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
    userModel.findById({_id : `${res.locals._id}`}) 
    .then(user=>{
        //console.log(user['contacts'])
        //return user['contacts']
        ContactsModule.find()
        .where('_id')
        .in(
            user['contacts']
        )
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
    })
    .catch(err=>{
        res.josn({
            msg: 'User Should be login '
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