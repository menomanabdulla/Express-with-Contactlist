const router = require('express').Router()

const userController = require('../controller/userController')
const contactController =  require('../controller/contactController')

//user route

//contacts route
router.post('/contacts',contactController.createContact)
router.get('/contacts',contactController.allContact)
router.get('/contacts/:id',contactController.singleContact)
router.patch('/contacts/:id',contactController.upadeContact)
router.delete('/contacts/:id',contactController.deleteContact)
//router.search('/contact/:id',contactController.searchContact)

module.exports = router