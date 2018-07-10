const router = require('express').Router()
const userController = require('../controller/userController')

const authenticat = require('../middlewares/protector')

//user route
router.get('/', authenticat, userController.user)
router.get('/:id',authenticat,  userController.singleUser)
router.post('/signup',userController.signUpUser)
router.post('/signin',userController.signInUser)
router.patch('/update/:id',authenticat, userController.upadateUser)
router.get('/fovourite',authenticat, userController.faveList)
router.patch('/fovourite-update',authenticat, userController.faveListUpdate)
router.delete('/fovourite-delete',authenticat, userController.faveListDelete)

module.exports = router