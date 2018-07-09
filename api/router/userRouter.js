const router = require('express').Router()
const userController = require('../controller/userController')

const authenticat = require('../middlewares/protector')

//user route
router.get('/', authenticat, userController.user)
router.get('/:id',userController.singleUser)
router.post('/signup',userController.signUpUser)
router.post('/signin',userController.signInUser)
router.patch('/update/:id',userController.upadateUser)
router.get('/fovourite',userController.faveList)
router.patch('/fovourite-update',userController.faveListUpdate)
router.delete('/fovourite-delete',userController.faveListDelete)

module.exports = router