const router = require('express').Router()

const contactController =  require('../controller/contactController')

//contacts route
router.post('/',contactController.createContact)
router.get('/',contactController.allContact)
router.get('/single/:id',contactController.singleContact)
router.patch('/update/:id',contactController.upadeContact)
router.delete('/delete/:id',contactController.deleteContact)
//router.search('/contact/:id',contactController.searchContact)

module.exports = router