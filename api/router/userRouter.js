const router = require('express').Router()
const userController = require('../controller/userController')

//user route
router.get('/',userController.user)
router.get('/:id',userController.singleUser)
router.post('/signup',userController.signUpUser)
router.post('/signin',userController.signInUser)
router.patch('/update',userController.upadateUser)
router.get('/fovourite',userController.faveList)
router.patch('/fovourite-update',userController.faveListUpdate)
router.delete('/fovourite-delete',userController.faveListDelete)

module.exports = router