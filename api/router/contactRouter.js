const router = require('express').Router()

const contactController =  require('../controller/contactController')
const authenticat = require('../middlewares/protector')

//contacts route
router.post('/', authenticat, contactController.createContact)
router.get('/',authenticat, contactController.allContact)
router.get('/:id',contactController.singleContact)
router.patch('/:id',contactController.upadeContact)
router.delete('/:id',contactController.deleteContact)
//router.search('/contact/:id',contactController.searchContact)

module.exports = router