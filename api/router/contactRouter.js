const router = require('express').Router()

const contactController =  require('../controller/contactController')

//contacts route
router.post('/',contactController.createContact)
router.get('/',contactController.allContact)
router.get('/contacts/:id',contactController.singleContact)
router.patch('/contacts/:id',contactController.upadeContact)
router.delete('/contacts/:id',contactController.deleteContact)
//router.search('/contact/:id',contactController.searchContact)

module.exports = router